/**
 * jsPsych plugin for showing animations and recording keyboard responses
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 */

jsPsych.plugins.animation = (function () {

    var plugin = {};

    jsPsych.pluginAPI.registerPreload('animation', 'stimuli', 'image');

    plugin.info = {
        name: 'animation',
        description: '',
        parameters: {
            stimuli: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Stimuli',
                default: undefined,
                array: true,
                description: 'The images to be displayed.'
            },
            frame_time: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: 'Frame time',
                default: 250,
                description: 'Duration to display each image.'
            },
            frame_isi: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: 'Frame gap',
                default: 0,
                description: 'Length of gap to be shown between each image.'
            },
            sequence_reps: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: 'Sequence repetitions',
                default: 1,
                description: 'Number of times to show entire sequence.'
            },
            choices: {
                type: jsPsych.plugins.parameterType.KEYCODE,
                pretty_name: 'Choices',
                default: jsPsych.ALL_KEYS,
                array: true,
                description: 'Keys subject uses to respond to stimuli.'
            },
            prompt: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Prompt',
                default: null,
                description: 'Any content here will be displayed below stimulus.'
            }
        }
    }

    plugin.trial = function (display_element, trial) {

        // store response
        var response = {
            trial_events: []
        };
        var timestamp_onload = jsPsych.totalTime();

        trial.stimuli = [];
        var pav_stimuli_arr = jsPsych.randomization.shuffle(pav_stimuli)

        pav_stimuli_arr.forEach(element => {
            trial.stimuli.push(element.stimuli);
        });

        var html = "";

        var interval_time = trial.frame_time + trial.frame_isi;
        var animate_frame = -1;
        var reps = 0;
        var startTime = performance.now();
        var animation_sequence = [];
        var responses = [];
        var current_stim = "";

        
        display_element.innerHTML = 
        html += '<style id="pav-conditioning">' +
            '.outcome_transparent { height: 340px; }' +
        '</style>' +
        '<svg class="vending-machine"  viewBox="0 0 253 459" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<rect x="27" y="20" width="203" height="359" fill="#000"/>' +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M253 0V440.506H209.527V459H44.6212V440.506H0V0H253ZM222 279H32V363H222V279ZM59.957 282.531L133.253 309.209L118.546 349.616L45.2501 322.938L59.957 282.531ZM86 210H32V256H86V210ZM154 210H100V256H154V210ZM222 210H168V256H222V210ZM86 148H32V194H86V148ZM154 148H100V194H154V148ZM222 148H168V194H222V148ZM86 86H32V132H86V86ZM154 86H100V132H154V86ZM222 86H168V132H222V86ZM86 24H32V70H86V24ZM154 24H100V70H154V24ZM222 24H168V70H222V24Z" fill="white"/>' +
        '</svg>' +
        '<div class="outcome_transparent"></div>';


        var animate_interval = setInterval(function () {
            var showImage = true;
            display_element.innerHTML = ''; // clear everything
            animate_frame++;
            if (animate_frame == trial.stimuli.length) {
                animate_frame = 0;
                reps++;
                if (reps >= trial.sequence_reps) {
                    endTrial();
                    clearInterval(animate_interval);
                    showImage = false;
                }
            }
            if (showImage) {
                show_next_frame();
            }
        }, interval_time);


        function show_next_frame() {
            // show image
            display_element.innerHTML = 
            '<div>' +
            '<svg class="vending-machine"  viewBox="0 0 253 459" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<rect x="27" y="20" width="203" height="359" fill="#000"/>' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M253 0V440.506H209.527V459H44.6212V440.506H0V0H253ZM222 279H32V363H222V279ZM59.957 282.531L133.253 309.209L118.546 349.616L45.2501 322.938L59.957 282.531ZM86 210H32V256H86V210ZM154 210H100V256H154V210ZM222 210H168V256H222V210ZM86 148H32V194H86V148ZM154 148H100V194H154V148ZM222 148H168V194H222V148ZM86 86H32V132H86V86ZM154 86H100V132H154V86ZM222 86H168V132H222V86ZM86 24H32V70H86V24ZM154 24H100V70H154V24ZM222 24H168V70H222V24Z" fill="white"/>' +
            '</svg>' +
            '</div>' +
            '<img src="' + trial.stimuli[animate_frame] + '" id="jspsych-animation-image" style="margin-top: 4rem; "></img>';

            current_stim = trial.stimuli[animate_frame];

            // record when image was shown
            animation_sequence.push({
                "stimulus": trial.stimuli[animate_frame],
                "time": performance.now() - startTime
            });

            if (trial.prompt !== null) {
                display_element.innerHTML += trial.prompt;
            }

            if (trial.frame_isi > 0) {
                var color = pav_stimuli_arr[animate_frame].color;
                $('.vending-machine rect').css({ fill: color });
                jsPsych.pluginAPI.setTimeout(function () {
                    display_element.querySelector('#jspsych-animation-image').style.visibility = 'hidden';
                    current_stim = 'blank';
                    // record when blank image was shown
                    $('.vending-machine rect').css({ fill: '#000' });
                    animation_sequence.push({
                        "stimulus": 'blank',
                        "time": performance.now() - startTime
                    });
                }, trial.frame_time);
            }
        }


 

        var after_response = function (info) {

            if(info.key_release === undefined) {
                response.trial_events.push({
                  "event_type": "key press",
                  "event_raw_details": info.key,
                  "event_converted_details": jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key) + ' key pressed',
                  "timestamp": jsPsych.totalTime(),
                  "time_elapsed": jsPsych.totalTime() - timestamp_onload
                });
              } else {
                  response.trial_events.push({
                    "event_type": "key release",
                    "event_raw_details": info.key_release,
                    "event_converted_details": jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key_release) + ' key released',
                    "timestamp": jsPsych.totalTime(),
                    "time_elapsed": jsPsych.totalTime() - timestamp_onload
                  });
            }
        }

        // hold the jspsych response listener object in memory
        // so that we can turn off the response collection when
        // the trial ends
        var response_listener = jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: after_response,
            valid_responses: trial.choices,
            rt_method: 'performance',
            persist: true,
            allow_held_key: false
        });

        function endTrial() {

            jsPsych.pluginAPI.cancelKeyboardResponse(response_listener);

            var trial_data = {
                "stage_name": JSON.stringify(trial.stage_name),
                "animation_sequence": JSON.stringify(animation_sequence),
                "responses": JSON.stringify(responses)
            };

            jsPsych.finishTrial(trial_data);
        }
    };

    return plugin;
})();