jsPsych.plugins['Parameters'] = (function(){

    var plugin = {};
  
    plugin.info = {
        name: 'Parameters',
        stage_name: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Stage Name',
            default: null,
            description: 'Specific name of the current stage.'
        },
        parameters: {
            variables: {
                type: jsPsych.plugins.parameterType.Obj,
                pretty_name: 'Variables',
                default: null,
                description: 'Variables from parameters.js file.'
            }
        }
    }
  
    plugin.trial = function(display_element, trial){
        var parameters = [{
          "full_screen_mode": full_screen_mode,
          "shake_right_rotate": shake_right_rotate,
          "shake_right_translateX": shake_right_translateX,
          "shake_left_rotate": shake_left_rotate,
          "shake_left_translateX": shake_left_translateX,
          "shake_return_time": shake_return_time,
          "shake_transition": shake_transition,
          "left_tilt": left_tilt,
          "right_tilt": right_tilt,
       
        // "video_sound": video_sound,
        // "video_duration": video_duration,
        },
        {},
        {},
        {},
        {},
        ];

        var trial_data = {
            "stage_name": "Parameters",
            "counter-balancing version": counter_balancing[0]["game_version"],
            "commit": git_commit,
            "parameters": JSON.stringify(parameters)
        };

        jsPsych.finishTrial(trial_data);
    }
  
    return plugin;
  
})();