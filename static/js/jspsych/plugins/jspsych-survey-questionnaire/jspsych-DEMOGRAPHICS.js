jsPsych.plugins['Demographics'] = (function () {
    var plugin = {};
  
    plugin.info = {
      name: 'Demographics',
      stage_name: 'Demographics',
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
      var plugin_id_name = "jspsych-survey-multi-choice";
  
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
      html += ".jspsych-survey-multi-choice-question { display: flex; align-items: center; margin-top: .2em; margin-bottom: .2em; text-align: left;  }" +
        ".jspsych-survey-multi-choice-text span.required {color: darkred;}" +
        ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-text {  text-align: center; }" +
        ".jspsych-survey-multi-choice-option { line-height: 2rem; display: flex; justify-content: center; }" +
        ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option {  display: flex; flex-flow: column wrap; align-items: center; }" +
        ".jspsych-survey-multi-choice-content { border-bottom: 1px solid;}" +
        ".jspsych-survey-multi-choice-form { max-width: 1000px; }" +
        ".jspsych-survey-multi-choice-form > .jspsych-survey-multi-choice-horizontal {   outline: 1px solid #fff; margin: 3rem 0;}" +
        "ul {list-style: none}" +
        ".form-radio { top: 0; }" +
        "input[type='number'] { background: transparent; border: none; border-bottom: 1px solid #fff; -webkit-box-shadow: none; box-shadow: none; border-radius: 0; color: #fff; width: 50px; text-align: center; margin: 0 1rem; }" +
        "input[type='number']:focus { -webkit-box-shadow: none; box-shadow: none;  outline: none;}" +
        `input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        input[type="number"] {
            -moz-appearance: textfield;
        }
        label { font-weight: 100 }
        ` +
        ".form-text { color: #000;  } " +
        ".jspsych-btn { margin: 100px 0; }" +
        ".jspsych-content { margin-top: 130px;}" +
        ".jspsych-survey-multi-choice-preamble { max-width: 1000px; text-align: left; }" +
        ".jspsych-survey-multi-choice-information { display: flex; justify-content: space-between }" +
        ".jspsych-survey-multi-choice-information div { width: 40%; text-align: left; padding: 2rem 0; }" +
        ".jspsych-survey-multi-choice-information ul { display: flex; width: 50%; justify-content: space-around; padding-inline-start: 0; }" +
        ".jspsych-survey-multi-choice-information li { width: 100px; display: flex; align-items: center; }" +
        "label.jspsych-survey-multi-choice-text input[type='radio'] {margin-right: 1em;}";
      ". { width: 50px; height: 50px; border-radius: 50%; display: flex; justify-content: center; align-items: center; }"
      html += '</style>';
  
      // show preamble text
      if (trial.preamble !== null) {
        html += '<div id="jspsych-survey-multi-choice-preamble" class="jspsych-survey-multi-choice-preamble">' + trial.preamble + '</div>';
      }
  
      // form element
      html += '<form id="jspsych-survey-multi-choice-form" class="jspsych-survey-multi-choice-form">';
  
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
        for (var i = 0; i < 1; i++) {
    
            // get question based on question_order
            var question = trial.questions[question_order[i]];
            var question_id = question_order[i];
    
            // create question container
            var question_classes = ['jspsych-survey-multi-choice-question'];
            if (question.horizontal) {
            question_classes.push('jspsych-survey-multi-choice-horizontal');
            }
    
            html += '<div id="jspsych-survey-multi-choice-' + question_id + '" class="' + question_classes.join(' ') + '"  data-name="' + question.name + '">';
    
            // add question text
            html += '<div style="width: 30%; padding: 1rem;"><p class="jspsych-survey-multi-choice-question survey-multi-choice" style="padding-top: 3px; text-align: left;">' + (i + 1) + '. ' + question.prompt
            // question.required
            html += '</p></div>';
            html += '<div style="display: flex; width: 70%;  padding: 1rem; justify-content: space-around; border-left: 1px solid #fff; ">';
    
            // create option radio buttons
            for (var j = 0; j < question.options.length; j++) {
            // add label and question text
            var option_id_name = "jspsych-survey-multi-choice-option-" + question_id + "-" + j;
            var input_name = 'jspsych-survey-multi-choice-response-' + question_id;
            var input_id = 'jspsych-survey-multi-choice-response-' + question_id + '-' + j;
    
            var required_attr = question.required ? 'required' : '';
    
            // add radio button container
            html += '<div id="' + option_id_name + '" class="jspsych-survey-multi-choice-option">';
            html += '<label class="jspsych-survey-multi-choice-text " for="' + input_id + '">' + question.options[j] + '</label>';
            html += '<input type="radio" name="' + input_name + '" id="' + input_id + '" class="form-radio" value="' + question.options[j] + '" ' + required_attr + '></input>';
            html += '</div>';
            }
    
            html += '</div></div>';
        }


        for (var i = 1; i < 2; i++) {
    
            // get question based on question_order
            var question = trial.questions[question_order[i]];
            var question_id = question_order[i];
    
            // create question container
            var question_classes = ['jspsych-survey-multi-choice-question'];
            if (question.horizontal) {
            question_classes.push('jspsych-survey-multi-choice-horizontal');
            }
    
            html += '<div id="jspsych-survey-multi-choice-' + question_id + '" class="' + question_classes.join(' ') + '"  data-name="' + question.name + '">';
    
            // add question text
            html += '<div style="width: 30%; padding: 1rem;"><p class="jspsych-survey-multi-choice-question survey-multi-choice jspsych-survey-multi-choice-question-age" style="padding-top: 3px; text-align: left;">' + (i + 1) + '. ' + question.prompt
            // question.required
            html += '</p></div>';
            html += '<div style="display: flex; width: 70%;  padding: 1rem; justify-content: space-around; border-left: 1px solid #fff; ">';
    
            // create option radio buttons
            for (var j = 0; j < question.options.length; j++) {
              // add label and question text
              var option_id_name = "jspsych-survey-multi-choice-option-" + question_id + "-" + j;
              var input_name = 'jspsych-survey-multi-choice-response-' + question_id;
              var input_id = 'jspsych-survey-multi-choice-response-' + question_id + '-' + j;
      
              var required_attr = question.required ? 'required' : '';
      
              // add radio button container
              html += '<div id="' + option_id_name + '" class="jspsych-survey-multi-choice-option">';
              html += '<label class="jspsych-survey-multi-choice-text " for="' + input_id + '">' + question.options[j] + '</label>';
              if(j === 0) {
                  html += '<input type="number" name="2a. Age (years)" id="' + input_id + '" class="input-year option-input-age" max="100" ' + required_attr + '></input>';
              } else {
                  html += '<input type="number" name="2b. Age (months)" id="' + input_id + '" class="input-month option-input-age" max="11" ' + required_attr + '></input>';
              }
              
              html += '</div>';
            }
    
            html += '</div></div>';
        }

        for (var i = 2; i < 3; i++) {
    
            // get question based on question_order
            var question = trial.questions[question_order[i]];
            var question_id = question_order[i];
    
            // create question container
            var question_classes = ['jspsych-survey-multi-choice-question'];
            if (question.horizontal) {
            question_classes.push('jspsych-survey-multi-choice-horizontal');
            }
    
            html += '<div id="jspsych-survey-multi-choice-' + question_id + '" class="' + question_classes.join(' ') + '"  data-name="' + question.name + '">';
    
            // add question text
            html += '<div style="width: 30%; padding: 1rem;"><p class="jspsych-survey-multi-choice-question survey-multi-choice jspsych-survey-multi-choice-question-height" style="padding-top: 3px; text-align: left;">' + (i + 1) + '. ' + question.prompt
            // question.required
            html += '</p></div>';
            html += '<div style="display: flex; width: 70%;  padding: 1rem; justify-content: space-around; border-left: 1px solid #fff; ">';
    
            // create option radio buttons
            for (var j = 0; j < question.options.length; j++) {
              // add label and question text
              var option_id_name = "jspsych-survey-multi-choice-option-" + question_id + "-" + j;
              var input_name = 'jspsych-survey-multi-choice-response-' + question_id;
              var input_id = 'jspsych-survey-multi-choice-response-' + question_id + '-' + j;
      
              var required_attr = question.required ? 'required' : '';
      
              // add radio button container
              html += '<div id="' + option_id_name + '" class="jspsych-survey-multi-choice-option" style="flex-flow: row; ">';
              
              if(j === 0) {
                html += '<input type="radio" data-enable="cm" name="Height (units selected)" id="' + input_id + '" class="form-radio" value="' + question.options[j] + '" ' + required_attr + '></input>';
                html += '<input type="number" name="3a. Height (cm)" id="' + input_id + '" class="jspsych-survey-multi-choice-radio-cm" max="250" ' + required_attr + ' disabled></input>';
              } else {
                  html += '<input type="radio" data-enable="feet" name="Height (units selected)" id="' + input_id + '" class="form-radio" value="' + question.options[j] + '" ' + required_attr + '></input>';
                  html += '<input type="number" name="3b. Height (feet)" id="' + input_id + '" class="jspsych-survey-multi-choice-radio-feet" max="8" ' + required_attr + ' disabled></input>';
                  html += '<label class="jspsych-survey-multi-choice-text " for="' + input_id + '">feet</label>';
                  html += '<input type="number" name="3c. Height (inches)" id="' + input_id + '" class="jspsych-survey-multi-choice-radio-inches" max="11" ' + required_attr + ' disabled></input>';
              }
              html += '<label class="jspsych-survey-multi-choice-text " for="' + input_id + '">' + question.options[j] + '</label>';
            
              html += '</div>';
            }
    
            html += '</div></div>';
        }

        for (var i = 3; i < 4; i++) {
    
            // get question based on question_order
            var question = trial.questions[question_order[i]];
            var question_id = question_order[i];
    
            // create question container
            var question_classes = ['jspsych-survey-multi-choice-question'];
            if (question.horizontal) {
            question_classes.push('jspsych-survey-multi-choice-horizontal');
            }
    
            html += '<div id="jspsych-survey-multi-choice-' + question_id + '" class="' + question_classes.join(' ') + '"  data-name="' + question.name + '">';
    
            // add question text
            html += '<div style="width: 30%; padding: 1rem;"><p class="jspsych-survey-multi-choice-question survey-multi-choice jspsych-survey-multi-choice-question-weight" style="padding-top: 3px; text-align: left;">' + (i + 1) + '. ' + question.prompt
            // question.required
            html += '</p></div>';
            html += '<div style="display: flex; width: 70%; justify-content: center; align-items: center; flex-direction: column; padding: 1rem; border-left: 1px solid #fff; position: relative;">';
    
            // create option radio buttons
            for (var j = 0; j < question.options.length; j++) {
            // add label and question text
            var option_id_name = "jspsych-survey-multi-choice-option-" + question_id + "-" + j;
            var input_name = 'jspsych-survey-multi-choice-response-' + question_id;
            var input_id = 'jspsych-survey-multi-choice-response-' + question_id + '-' + j;
    
            var required_attr = question.required ? 'required' : '';
    
            if(j === 0) {
              html += '<div style="position: absolute; left: 30%;">';
              html += '<input type="number" name="4b. Weight" class="option-input-weight" max="440" ' + required_attr + ' disabled></input>';
              html += '</div>';

              html += '<div>';
              html += '<div style="display: flex; justify-content: flex-end; margin: 1rem; width: 120px; padding-right: 1rem; flex-direction: row-reverse;" id="' + option_id_name + '" class="jspsych-survey-multi-choice-option">';
              html += '<label style="padding-left: 1rem;" class="jspsych-survey-multi-choice-text " for="' + input_id + '">' + question.options[j] + '</label>';
              html += '<input type="radio" data-enable="weight" name="weight" value="kg" id="' + input_id + '" class="form-radio jspsych-survey-multi-choice-radio-kg" value="' + question.options[j] + '" ' + required_attr + '></input>';
            } else {
              html += '<div>';
              html += '<div style="display: flex; justify-content: flex-end; margin: 1rem; width: 120px; padding-right: 1rem; flex-direction: row-reverse;" id="' + option_id_name + '" class="jspsych-survey-multi-choice-option">';
              html += '<label style="padding-left: 1rem;" class="jspsych-survey-multi-choice-text " for="' + input_id + '">' + question.options[j] + '</label>';
              html += '<input type="radio" data-enable="weight" name="weight" value="pounds" id="' + input_id + '" class="form-radio jspsych-survey-multi-choice-radio-pounds" value="' + question.options[j] + '" ' + required_attr + '></input>';
            }

            html += '</div>';
            html += '</div>';
           
            }
    
            html += '</div></div>';
        }

        // add multiple-choice questions
        for (var i = 4; i < 8; i++) {

            // get question based on question_order
            var question = trial.questions[question_order[i]];
            var question_id = question_order[i];
        
            // create question container
            var question_classes = ['jspsych-survey-multi-choice-question'];
            if (question.horizontal) {
                question_classes.push('jspsych-survey-multi-choice-horizontal');
            }
        
            html += '<div id="jspsych-survey-multi-choice-' + question_id + '" class="' + question_classes.join(' ') + '"  data-name="' + question.name + '">';
        
            // add question text
            html += '<div style="width: 20%; padding: 1rem;"><p class="jspsych-survey-multi-choice-question survey-multi-choice" style="padding-top: 3px; text-align: left;">' + (i + 1) + '. ' + question.prompt
            // question.required
            html += '</p></div>';
            html += '<div style="display: flex; width: 80%;  padding: 3rem 0; justify-content: space-around; border-left: 1px solid #fff;">';
        
            // create option radio buttons
            for (var j = 0; j < question.options.length; j++) {
                // add label and question text
                var option_id_name = "jspsych-survey-multi-choice-option-" + question_id + "-" + j;
                var input_name = 'jspsych-survey-multi-choice-response-' + question_id;
                var input_id = 'jspsych-survey-multi-choice-response-' + question_id + '-' + j;
        
                var required_attr = question.required ? 'required' : '';
        
                // add radio button container
                html += '<div id="' + option_id_name + '" class="jspsych-survey-multi-choice-option">';
                html += '<label style="padding-bottom: 2rem;" class="jspsych-survey-multi-choice-text " for="' + input_id + '">' + question.options[j] + '</label>';
                html += '<input type="radio" name="' + input_name + '" id="' + input_id + '" class="form-radio" value="' + question.options[j] + '" ' + required_attr + '></input>';
                html += '</div>';
            }
        
            html += '</div></div>';
        }
          
  
      html += '</div>';
  
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
  
      document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        // measure response time
        var endTime = performance.now();
        var response_time = endTime - startTime;
  
        // create object to hold responses
        var question_data = {};

        for (var i = 0; i < 1; i++) {
          var match = display_element.querySelector('#jspsych-survey-multi-choice-' + i);
          var id = $(match).find('.jspsych-survey-multi-choice-question').text();

          if (match.querySelector("input[type=radio]:checked") !== null) {
            var val = match.querySelector("input[type=radio]:checked").value;
            $(match).find('.jspsych-survey-multi-choice-question').removeClass('survey-error-after');
          } else {
            $(match).find('.jspsych-survey-multi-choice-question').addClass('survey-error-after');
            var val = "";
          }
          var obje = {};
          var name = id;
          if (match.attributes['data-name'].value !== '') {
            name = match.attributes['data-name'].value;
          }
          obje[name] = val;
          Object.assign(question_data, obje);
        }



        // input age check
        (function() {
          var year_input_value = $('.input-year').val();
          var label = $("#jspsych-survey-multi-choice-response-1-0").prop("labels")
          if(year_input_value === '') {
            $('.jspsych-survey-multi-choice-question-age').addClass('survey-error-after');
          } else if (year_input_value >= 18) {
            $('.jspsych-survey-multi-choice-question-age').removeClass('survey-error-after');
            $('.moda__age-incomplete').remove();
            $(label).removeClass('survey-error-after');
            var object2a = {
              '2a. Age (years)': $("input[name='2a. Age (years)']").val()
            };
            var object2b = {
              '2b. Age (months)': $("input[name='2b. Age (months)']").val() ? $("input[name='2b. Age (months)']").val() : 'NA'
            };
            Object.assign(question_data, object2a, object2b);
          } else {
            $('.jspsych-survey-multi-choice-question-age').addClass('survey-error-after');
            $(label).addClass('survey-error-after');
            if (!$(".moda__age-incomplete").length ) {
              $('.modal__content').append('<p class="moda__age-incomplete">You have entered an age that falls outside the expected range. <br/> Please enter your age.</p>')
            }
          }

        })();

        // input height check
        (function() {
            var height_input_value_cm = $('.jspsych-survey-multi-choice-radio-cm').val();
            var height_input_value_feet = $('.jspsych-survey-multi-choice-radio-feet').val();
            var height_input_value_inches = $('.jspsych-survey-multi-choice-radio-inches').val();
            var height_radio_value = $("input[name='Height (units selected)']:checked").val();
            var label_cm = $("#jspsych-survey-multi-choice-response-2-0").prop("labels");
            var label_feet = $("#jspsych-survey-multi-choice-response-2-1").prop("labels");
            var label;

            var height_min, height_max;
            var height_input_value = '';

            if(height_radio_value === 'cm') {
              height_input_value = height_input_value_cm;
              height_min = 100;
              height_max = 250;
              label = label_cm;
            } else {
              height_input_value = height_input_value_feet;
              height_min = 3;
              height_max = 8;
              label = label_feet;
            }
          
            if(height_input_value === '') {
                $('.jspsych-survey-multi-choice-question-height').addClass('survey-error-after');
            } else if (height_input_value >= height_min && height_input_value <= height_max) {
                if(height_input_value == 8 && height_input_value_inches >= 4) {
                  $('.jspsych-survey-multi-choice-question-height').addClass('survey-error-after');
                  if (!$(".moda__height-incomplete").length ) {
                    $('.modal__content').append('<p class="moda__height-incomplete">You have entered a height that falls outside the expected range. <br/> Please enter your height.</p>');
                  }
                } else {
                  $('.jspsych-survey-multi-choice-question-height').removeClass('survey-error-after');
                  $('.moda__height-incomplete').remove();
                  $(label).removeClass('survey-error-after');
                  var object3a = {
                    '3a. Height (cm)': $("input[name='3a. Height (cm)']").val() ? $("input[name='3a. Height (cm)']").val() : 'NA'
                  };
                  var object3b = {
                    '3b. Height (feet)': $("input[name='3b. Height (feet)']").val() ? $("input[name='3b. Height (feet)']").val() : 'NA'
                  };
                  var object3c = {
                    '3c. Height (inches)': $("input[name='3c. Height (inches)']").val() ? $("input[name='3c. Height (inches)']").val() : 'NA'
                  };
                  Object.assign(question_data, object3a, object3b, object3c);
                }
            } else {
                $('.jspsych-survey-multi-choice-question-height').addClass('survey-error-after');
                $(label).addClass('survey-error-after');
                if (!$(".moda__height-incomplete").length ) {
                  $('.modal__content').append('<p class="moda__height-incomplete">You have entered a height that falls outside the expected range. <br/> Please enter your height.</p>');
                }
            }
        })();

        // input weight check
        (function() {
          var weight_input_value = $('.option-input-weight').val();
          var weight_radio_value = $("input[name='weight']:checked").val();
          var weight_min, weight_max;
          var label_kg = $("#jspsych-survey-multi-choice-response-3-0").prop("labels");
          var label_pounds = $("#jspsych-survey-multi-choice-response-3-1").prop("labels");
          var label;

          if(weight_radio_value != 'kg') {
            weight_min = 85;
            weight_max = 440;
            label = label_pounds;
          } else {
            weight_min = 40;
            weight_max = 200;
            label = label_kg;
          }

          if(weight_input_value === '') {
            $('.jspsych-survey-multi-choice-question-weight').addClass('survey-error-after');
          } else if (weight_input_value >= weight_min && weight_input_value <= weight_max) {
            $('.jspsych-survey-multi-choice-question-weight').removeClass('survey-error-after');
            $('.moda__weight-incomplete').remove();
            $(label).removeClass('survey-error-after');
            var object4a = {
              'Weight (unit)': weight_radio_value
            }
            var object4b = {
              'Weight': $("input[name='4b. Weight']").val() 
            }

            Object.assign(question_data, object4a, object4b);
          } else {
            $('.jspsych-survey-multi-choice-question-weight').addClass('survey-error-after');
            $(label).addClass('survey-error-after');
            if (!$(".moda__weight-incomplete").length ) {
              $('.modal__content').append('<p class="moda__weight-incomplete">You have entered a weight that falls outside the expected range. <br/> Please enter your weight.</p>')
            }
          }
        })();
        

        for (var i = 4; i < trial.questions.length; i++) {
          var match = display_element.querySelector('#jspsych-survey-multi-choice-' + i);
  
          var id = $(match).find('.jspsych-survey-multi-choice-question').text();
          if (match.querySelector("input[type=radio]:checked") !== null) {
            var val = match.querySelector("input[type=radio]:checked").value;
            $(match).find('.jspsych-survey-multi-choice-question').removeClass('survey-error-after');
          } else {
            $(match).find('.jspsych-survey-multi-choice-question').addClass('survey-error-after');
            var val = "";
  
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

      //  input integer function
      $(function() {
          $('input[type="number"').on('keyup', function() {
            var el = $(this),
                val = Math.max((0, el.val())),
                max = parseInt(el.attr('max'));
        
            el.val(isNaN(max) ? val : Math.min(max, val));
          });
      });


      // input number activation on radio button
      $('input:radio').click(function() {
        if($(this).data().enable) {
            var inputName = $(this).data().enable;
            switch (inputName) {
                case 'cm':
                    $( "input[name='3a. Height (cm)']").removeAttr("disabled");
                    $( "input[name='3b. Height (feet)']").prop("disabled", true).val('');
                    $( "input[name='3c. Height (inches)']").prop("disabled", true).val('');
                    var label3b = $( "#jspsych-survey-multi-choice-response-2-1").prop('labels');
                    $(label3b).removeClass('survey-error-after');
                    break;
                case 'feet':
                    $( "input[name='3a. Height (cm)']").prop("disabled", true).val('');
                    $( "input[name='3b. Height (feet)']").removeAttr("disabled");
                    $( "input[name='3c. Height (inches)']").removeAttr("disabled");
                    var label3a = $( "#jspsych-survey-multi-choice-response-2-0").prop('labels');
                    $(label3a).removeClass('survey-error-after');
                    break;
                case 'weight':
                    $('.option-input-weight').removeAttr("disabled").val('');
                  
                    $( "input[name='weight']" ).each(function( index ) {
                      var label = $(this).prop('labels')
                      $(label).removeClass('survey-error-after');
                    });
                    break;
                default:
                    break;
            }
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