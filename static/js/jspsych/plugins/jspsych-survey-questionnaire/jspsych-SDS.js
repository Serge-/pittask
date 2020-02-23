jsPsych.plugins['SDS'] = (function () {
    var plugin = {};
  
    plugin.info = {
      name: 'Sheehan Disability Scale',
      stage_name: 'Sheehan Disability Scale',
      description: '',
      parameters: {
        questions: {
          type: jsPsych.plugins.parameterType.COMPLEX,
          array: true,
          pretty_name: 'Questions',
          nested: {
            prompt: {
              type: jsPsych.plugins.parameterType.STRING,
              pretty_name: 'Prompt',
              default: undefined,
              description: 'The strings that will be associated with a group of options.'
            },
            options: {
              type: jsPsych.plugins.parameterType.STRING,
              pretty_name: 'Options',
              array: true,
              default: undefined,
              description: 'Displays options for an individual question.'
            },
            required: {
              type: jsPsych.plugins.parameterType.BOOL,
              pretty_name: 'Required',
              default: false,
              description: 'Subject will be required to pick an option for each question.'
            },
            horizontal: {
              type: jsPsych.plugins.parameterType.BOOL,
              pretty_name: 'Horizontal',
              default: false,
              description: 'If true, then questions are centered and options are displayed horizontally.'
            },
            name: {
              type: jsPsych.plugins.parameterType.STRING,
              pretty_name: 'Question Name',
              default: '',
              description: 'Controls the name of data values associated with this question'
            }
          }
        },
        randomize_question_order: {
          type: jsPsych.plugins.parameterType.BOOL,
          pretty_name: 'Randomize Question Order',
          default: false,
          description: 'If true, the order of the questions will be randomized'
        },
        preamble: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Preamble',
          default: null,
          description: 'HTML formatted string to display at the top of the page above all the questions.'
        },
        button_label: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Button label',
          default: 'Continue',
          description: 'Label of the button.'
        },
        event_type: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Event type',
          default: null,
          description: 'Event type'
        },
        event_raw_details: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Event raw details',
          default: null,
          description: 'Event raw details'
        },
        event_converted_details: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Event converted details',
          default: null,
          description: 'Event converted details'
        }
      }
    }
    plugin.trial = function (display_element, trial) {
      var plugin_id_name = "jspsych-survey-multi-choice-SDS";
  
      var html = "";
  
      // store response
      var response = {
        trial_events: []
      };
  
      response.trial_events.push({
        "event_type": trial.event_type,
        "event_raw_details": trial.event_raw_details,
        "event_converted_details": trial.event_converted_details,
        "timestamp": jsPsych.totalTime()
      });
  
      $('body').prepend(
        `<header>
          <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
              <div class="navbar-header">
              <p class="navbar-text">${plugin.info.name}</p>
              </div>
            </div>
          </nav>
        </header>`);
  
      // inject CSS for trial
      html += '<style id="jspsych-survey-multi-choice-css">';
      html += ".jspsych-survey-multi-choice-question { text-align: center; outline: 1px solid #fff; padding: 2rem; margin: 2rem 0; }" +
        ".jspsych-content-wrapper { width: 1000px}" +
        ".jspsych-survey-multi-choice-text span.required {color: darkred;}" +
        ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-text {  text-align: center;}" +
        ".jspsych-survey-multi-choice-preamble { text-align: left; padding: 3rem 0; }" +
        ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option {  width: 100%; border-left: 1px solid; text-align: center; padding: 0 1rem; }" +
        ".jspsych-survey-multi-choice-option  { position: relative; }" +
        ".jspsych-survey-multi-choice-option:first-of-type::after  { content: '◀'; position: absolute; right: -14px; top: 11px; }" +
        ".jspsych-survey-multi-choice-option:last-of-type::after  { content: '▶'; position: absolute; left: -14px; top: 11px; }" +
        ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option:first-child  {background-color: red;}" +
        ".jspsych-content { width: 1000px}" +
        ".jspsych-btn { margin: 70px 0; }" +
        ".question-title-heading { text-transform: uppercase; font-weight: bold; }" +
        ".jspsych-content { margin-top: 130px;}" +
        ".square { display: flex; justify-content: space-around; }" +
        ".square span { width: 85px; height: 60px; border: 1px solid #fff; }" +
        "ul {list-style: none}" +
        ".form-radio { top: 3px; }" +
        "select { background-color: #000; width: 100px; margin: 0 1rem;}" +
        ".circle-line { width: 90%; position: absolute; border-bottom: 1px solid; z-index: -1; }" +
        "label.jspsych-survey-multi-choice-text input[type='radio'] {margin-left: 1em;}" +
        ".jspsych-survey-highlight { width: 50px; height: 50px; border-radius: 50%; border: 2px solid #fff; z-index: 1; background-color: #000; box-shadow: 0 0 2px 0px white inset, 0 0 2px 0px white; justify-content: center; display: flex; align-items: center; }" +
        ".bg-primary { border: 2px solid #428bca; box-shadow: 0 0 2px 0px #428bca inset, 0 0 2px 0px #428bca; background-color: #428bca; }" +
        "p { margin: 0 0 0px;}"
      html += '</style>';
  
  
      // form element
      html += '<div id="' + plugin_id_name + '">';
      html += '<form id="jspsych-survey-multi-choice-form" class="jspsych-survey-multi-choice-form">';

      // show preamble text
      if (trial.preamble !== null) {
        html += '<div class="jspsych-survey-multi-choice-content"><div id="jspsych-survey-multi-choice-preamble" class="jspsych-survey-multi-choice-preamble">' + trial.preamble + '</div>';
      }
   
      // generate question order. this is randomized here as opposed to randomizing the order of trial.questions
      // so that the data are always associated with the same question regardless of order
      var question_order = [];
      for (var i = 0; i < trial.questions.length; i++) {
        question_order.push(i);
      }
      if (trial.randomize_question_order) {
        question_order = jsPsych.randomization.shuffle(question_order);
      }
  
      // add multiple-choice questions
      for (var i = 0; i < 3; i++) {
  
        // get question based on question_order
        var question = trial.questions[question_order[i]];
        var question_id = question_order[i];
        var question_name = question.name;
  
        // create question container
        var question_classes = ['jspsych-survey-multi-choice-question'];
        if (question.horizontal) {
          question_classes.push('jspsych-survey-multi-choice-horizontal');
        }
  
        html += '<div id="jspsych-survey-multi-choice-' + question_id + '" class="' + question_classes.join(' ') + '"  data-name="' + question_name + '">';
  
        // add question text
        html += '<div>' + question.prompt
        // question.required
        html += '</div>';
        html += `
          <div>
            <ul style="display: flex; position: relative; justify-content: center; padding-inline-start: 0;">
              <li style="position: absolute; top: 1rem; left: 0;">
                Not at all
              </li>
              <li style="position: absolute; top: 1rem; left: 12rem;">
                Mildly
                <div class="square">
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li style="position: absolute; top: 1rem; left: 37rem;">
                Moderately
                <div class="square">
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li style="position: absolute; top: 1rem; right: 12rem;">
                Markedly
                <div class="square">
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li style="position: absolute; top: 1rem; right: 0;">
                Extremely
              </li>
            </ul>
           
          </div>
        `;
        html += '<div style="display: flex; justify-content: space-around; align-items: center; position: relative; padding-top: 6rem; ">';
        html += '<span class="circle-line"></span>';
        // create option radio buttons
        for (var j = 0; j < question.options.length; j++) {
          // add label and question text
          var option_id_name = "jspsych-survey-multi-choice-option-" + question_id + "-" + j;
          var input_name = 'jspsych-survey-multi-choice-response-' + question_id;
          var input_id = 'jspsych-survey-multi-choice-response-' + question_id + '-' + j;
  
          var required_attr = question.required ? 'required' : '';
  
          // add radio button container
          html += '<div id="' + option_id_name + '" class="jspsych-survey-multi-choice-option">';
          html += '<input type="radio" name="' + input_name + '" id="' + input_id + '" class="form-radio hidden" value="' + question.options[j] + '" ' + required_attr + '></input>';
          html += '<label class="jspsych-survey-multi-choice-text jspsych-survey-highlight" for="' + input_id + '">' + question.options[j] + '</label>';
          html += '</div>';
        }
  
        html += '</div>';
        if(i === 0) {
          html += '<div style="display: flex; padding: 2rem 0 2rem 2rem;">' +
          '<div class="input-not-working"><input type="radio" name="" class="form-radio" value="Checkbox question.: I have not worked/studies at all during the past week..."></input></div>' +
          '<div style="text-align: left; padding-left: 2rem;"><p>I have not worked / studies at all during the past week for reasons unrelated to the disorder.</p>' +
          '<p>* Work includes paid, unpaid volunteer work or training</p></div></div>';
        }
        html += '</div>';
        
      }


      // add multiple-choice questions
      for (var i = 3; i < trial.questions.length; i++) {

          // get question based on question_order
          var question = trial.questions[question_order[i]];
          var question_id = question_order[i];
          var question_name = question.name;

          // create question container
          var question_classes = ['jspsych-survey-multi-choice-question-input'];
          if (question.horizontal) {
            question_classes.push('jspsych-survey-multi-choice-horizontal');
          }

          html += '<div id="jspsych-survey-multi-choice-' + question_id + '" class="' + question_classes.join(' ') + '"  data-name="' + question_name + '">';

          // add question text
          html += '<div style="text-align: left;"><h3 class="question-title">' + question.title + '</h3><p style="position: relative;">' + question.prompt ;
          // html += '<div style="display: flex; width: 60%; justify-content: space-around;">';

          // create option radio buttons
          html += '<span style="position: absolute; right: 0;">';
          html += '<label for="' + question_name + '">Select answer:</label>';
          html += '<select id="' + question_name + '" class="select-days-' + i + '"><option value="None">-</option>';
          
          for (var j = 0; j < question.options.length; j++) {
            // add label and question text
            var option_id_name = "jspsych-survey-multi-choice-option-" + question_id + "-" + j;
            var input_name = 'jspsych-survey-multi-choice-response-' + question_id;
            var input_id = 'jspsych-survey-multi-choice-response-' + question_id + '-' + j;

            // var required_attr = question.required ? 'required' : '';

            // add radio button container
            // html += '<div id="' + option_id_name + '" class="jspsych-survey-multi-choice-option">';
            // html += '<label class="jspsych-survey-multi-choice-text jspsych-survey-highlight hidden" for="' + input_id + '">' + question.options[j] + '</label>';
            html += '<option type="select" name="' + input_name + '" id="' + input_id + '" value="' + question.options[j] + '" ' + required_attr + '>' + question.options[j] + '</option>';
            // html += '</div>';
          }
          html += '</select>';
          html += '</p></span>';
          html += '</div></div>';
      }

      
      html += '</div>';

      html += '<p style="margin-top: 5rem; font-style: italic;">© Copryright 1983 David V. Sheehan. All Rights Reserved.</p>';

      // add submit button
      html += '<p><input type="submit" id="' + plugin_id_name + '-next" class="' + plugin_id_name + ' jspsych-btn"' + (trial.button_label ? ' value="' + trial.button_label + '"' : '') + '></input></p>';
      html += '</form>';
  
      html +=
        `<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
              <div class="modal__overlay" tabindex="-1" data-micromodal-close>
                <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
                  <header class="modal__header">
                    <h2 class="modal__title" id="modal-1-title">
                      Warning!
                    </h2>
                    <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                  </header>
                  <main class="modal__content" id="modal-1-content">
                    <p>
                    ${survey.modal}
                    </p>
                  </main>
                  <footer class="modal__footer">
                    <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>
                  </footer>
                </div>
              </div>
          </div>`;
  
      // render
      display_element.innerHTML = html;
  
      // function to handle key press responses
      var after_response = function (info) {
  
        if (info.key_release === undefined) {
          response.trial_events.push({
            "event_type": "key press",
            "event_raw_details": info.key,
            "event_converted_details": jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key) + ' key pressed',
            "timestamp": jsPsych.totalTime()
          });
        } else {
          response.trial_events.push({
            "event_type": "key release",
            "event_raw_details": info.key_release,
            "event_converted_details": jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key_release) + ' key released',
            "timestamp": jsPsych.totalTime()
          });
        }
      }
  
      $('.jspsych-survey-highlight').click(function () {
        $(this).parent().parent().find('.jspsych-survey-highlight').removeClass('bg-primary');
        $(this).addClass('bg-primary');
        $(this).next('input').prop("checked", true);
        $(this).closest('input').click();
      })
  
      document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        // measure response time
        var endTime = performance.now();
        var response_time = endTime - startTime;
  
        // create object to hold responses
        var question_data = {};
        for (var i = 0; i < 3; i++) {
          var match = display_element.querySelector('#jspsych-survey-multi-choice-' + i);
          var id = (i + 1);
          var val_not_working;
          
          if(i === 0) {
            if (match.querySelector(".input-not-working input[type=radio]:checked") !== null) {
              val_not_working = {
                'Checkbox question.: I have not worked/studies at all during the past week...' : 'Checked'
              } 
            } else {
              val_not_working = {
              'Checkbox question.: I have not worked/studies at all during the past week...': 'NA'
              }
            }
          }
          if (match.querySelector(".jspsych-survey-multi-choice-option input[type=radio]:checked") !== null) {
            var val = match.querySelector(".jspsych-survey-multi-choice-option input[type=radio]:checked").value;
            $(match).find('.question-title').removeClass('survey-error-after');

          } else {
            var val = "";
            $(match).find('.question-title').addClass('survey-error-after');
          }

          var obje = {};
          var name = id;
      
          if (match.attributes['data-name'].value !== '') {
            name = match.attributes['data-name'].value;
          }
          obje[name] = val;
          Object.assign(question_data, obje, val_not_working);
        }
        
        for (var i = 3; i < trial.questions.length; i++) {
          var match = display_element.querySelector('#jspsych-survey-multi-choice-' + i);
          var id = (i + 1);
          if (match.querySelector("option:checked").value !== 'None') {
            var val = match.querySelector("option:checked").value;
            $(match).find('.question-title').removeClass('survey-error-after');

          } else {
            var val = "";
            $(match).find('.question-title').addClass('survey-error-after');
          }

          var obje = {};
          var name = id;
      
          if (match.attributes['data-name'].value !== '') {
            name = match.attributes['data-name'].value;
          }
          obje[name] = val;
          Object.assign(question_data, obje);
        }

  
        if ($(".survey-error-after").length < 1) {
          // kill keyboard listeners
          if (typeof keyboardListener !== 'undefined') {
            jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
            jsPsych.pluginAPI.cancelClickResponse(clickListener);
          }
  
          // save data
          var trial_data = {
            "stage_name": JSON.stringify(plugin.info.stage_name),
            "responses": JSON.stringify(question_data),
            "question_order": JSON.stringify(question_order),
            "events": JSON.stringify(response.trial_events)
          };
  
          display_element.innerHTML = '';
          $('.navbar').remove();
  
          // next trial
          jsPsych.finishTrial(trial_data);
        } else {
          MicroModal.show('modal-1');
        }
  
      });
  
      var startTime = performance.now();
  
      // start the response listener
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: jsPsych.ALL_KEYS,
        rt_method: 'performance',
        persist: true,
        allow_held_key: false
      });
      var clickListener = jsPsych.pluginAPI.getMouseResponse({
        callback_function: after_response,
        valid_responses: jsPsych.ALL_KEYS,
        rt_method: 'performance',
        persist: true,
        allow_held_key: false
      });
    };
  
    return plugin;
  })();