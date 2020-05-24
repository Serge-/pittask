// main settings
var full_screen_mode = false;

// vending machine rules configuration
var left_tilt = 37;
var right_tilt = 39;
var shake_right_rotate = 15;
var shake_right_translateX = 15;
var shake_left_rotate = -15;
var shake_left_translateX = -15;
var shake_return_time = 300;
var shake_transition = 0.05;

/************************************************************
 * Key-testing
 * @key_testing_open
 * @key_testing_close
 * @key_testing_latency_period
 ************************************************************
*/
var key_testing_open = "First we just need to check that your keyboard can control the game. Press any key when you are ready.";
var key_testing_close = "Okay. That all seems to be working fine. Press any key when you are ready to start the games";
var key_testing_latency_period = 1000;

var vvr = {
    instrumental_conditioning: {
        open_instruct: true,
        open_instruct_text: '<p>You can now interact with the vending machine to earn snacks.</p>',
        open_instruct_latency: 3000,
        degrad_pattern: ['d1', 'd2', 'd1'],
        prob_value: [1, 1, 1],
        interval_duration: 500,
        outcome_duration: 500,
        interval_num: 2,
        min_blocks_num: 3,
        max_num_correct: 4,
        max_num_incorrect: 2,
        max_num_correct_consecutive_questions: 4,
        question_text_a1: 'Which directions did you get tilt to get',
        question_text_a2: 'Press Left or Right button',
        question_text_b1: 'How strongly do you believe in your answer?',
        question_text_b2: 'Very little',
        question_text_b3: 'Very much!',
        question_text_b4: '<li><span>Select answer using your mouse.</span></li><li><span>Click \'submit answer\' when ready</span></li>',
        popup_text: 'Sorry, first you should select answer using your mouse prior to submission.',
        correct_text: 'Correct',
        incorrect_text: 'Try again!',
        feedback_duration: 2000,
        close_instruct: true,
        close_instruct_text: '<p>Some text for close instructions VVR "instrumental conditioning"</p>',
        close_instruct_latency: 3000,
    },
    contingency_degradation: {
        open_instruct: true,
        open_instruct_text: '<p>You can now interact with the vending machine to earn snacks.</p>',
        open_instruct_latency: 3000,
        degrad_pattern: ['d1', 'd2'],
        prob_value: [1, 1],
        interval_duration: 2000,
        outcome_duration: 1000,
        interval_num: 2,
        min_blocks_num: 1,
        max_num_correct: 2,
        max_num_incorrect: 2,
        max_num_correct_consecutive_questions: 6,
        question_text_a1: 'Which directions did you get tilt to get',
        question_text_a2: 'Press Left or Right button',
        question_text_b1: 'How strongly do you believe in your answer?',
        question_text_b2: 'Very little',
        question_text_b3: 'Very much!',
        question_text_b4: '<li><span>Select answer using your mouse.</span></li><li><span>Click \'submit answer\' when ready</span></li>',
        popup_text: 'Sorry, first you should select answer using your mouse prior to submission.',
        correct_text: 'Correct',
        incorrect_text: 'Try again!',
        feedback_duration: 2000,
        close_instruct: true,
        close_instruct_text: '<p>Some text for close instructions VVR "contingency degradation"</p>',
        close_instruct_latency: 3000,
    },
    contingency_restoration: {
        open_instruct: true,
        open_instruct_text: '<p>You can now interact with the vending machine to earn snacks.</p>',
        open_instruct_latency: 3000,
        degrad_pattern: ['d1', 'd2'],
        prob_value: [1, 1],
        interval_duration: 2000,
        outcome_duration: 1000,
        interval_num: 2,
        min_blocks_num: 1,
        max_num_correct: 2,
        max_num_incorrect: 2,
        max_num_correct_consecutive_questions: 6,
        question_text_a1: 'Which directions did you get tilt to get',
        question_text_a2: 'Press Left or Right button',
        question_text_b1: 'How strongly do you believe in your answer?',
        question_text_b2: 'Very little',
        question_text_b3: 'Very much!',
        question_text_b4: '<li><span>Select answer using your mouse.</span></li><li><span>Click \'submit answer\' when ready</span></li>',
        popup_text: 'Sorry, first you should select answer using your mouse prior to submission.',
        correct_text: 'Correct',
        incorrect_text: 'Try again!',
        feedback_duration: 2000,
        close_instruct: true,
        close_instruct_text: '<p>Some text for close instructions VVR "contingency restoration"</p>',
        close_instruct_latency: 3000,
    }
}


/************************************************************
 * Symptom Inventory Randomization ( Can enable/disable randomization, used in dammy data generation )
 * @symptom_inventory_randomization = true - random order of symptom inventory is enabled
 * @symptom_inventory_randomization = false - random order of symptom inventory is disabled
 ************************************************************
*/
var symptom_inventory_randomization = true;

var survey = {
    modal: 'Sorry, all questions need to be answered prior to submission.',
    clinical_text: {
        clinical_latency_period: 1000,
        clinical_open_text: "<p class='v-center-txt'>We'd like to briefly ask you about some symptoms before the online game. <br> Press any key when you are ready. </p>",
        clinical_close_text: "<p class='v-center-txt'>That's it for the symptom questions. Now we're ready to start the online game. <br> Press any key when you are ready. </p>"
    },
    symptom_inventory: [
        // OCI-R
        OCIR,
        // MOVES
        MOVES,
        // DASS
        DASS,
        // Adult Attention-Deficit/Hyperactivity Disorder Self-Report Screening Scale for DSM-5 (ASRS-5)
        ASRS5,
        // Internet-based form EAT-26
        EAT26,
        // The RAADS Screen
        RAADS,
        // PHQ-9
        PHQ9,
        // GAD-7
        GAD7,
        // LSAS
        LSAS,
        // ASRM
        ASRM,
        // The Primary Care PTSD Screen for DSM-5 (PC-PTSD-5)
        PTSD,
        // The PRIME Screen – Revised
        PRIME_R,
        // AUDIT
        AUDIT,
        // PGSI
        PGSI,
        // YIAT
        YIAT,
        // Smoking status
        SMOKE_FTND,
        // Insomnia Severity Index
        ISI,
        // The Personality Inventory for DSM-5—Brief Form (PID-5-BF)— Adult
        PID
    ]
}

/************************************************************
 * Food and Hunger Questions
 ************************************************************/

var FHQ_1 = "How much do you like Tiny Teddies?";
var FHQ_2 = "How much do you like M&Ms?";
var FHQ_3 = "How much do you like BBQ shapes?";
var FHQ_4 = "How hungry do you feel right now?";

var FHQ_1_bottom_text = "Rate the pleasantness of Tiny Teddies";
var FHQ_2_bottom_text = "Rate the pleasantness of M&Ms";
var FHQ_3_bottom_text = "Rate the pleasantness of BBQ shapes";

var vas_left = "Very Unpleasant";
var vas_center = "Neutral";
var vas_right = "Very Pleasant";

var vas_left_hungry = "<p>Not at All</p>";
var vas_right_hungry = "<p>Extremely</p>";

/************************************************************
 * Pavlovian Conditioning
 ************************************************************/

var pav_time_animation = 500;
var pav_correct_answers = 2;
var pav_incorrect_answers = 1;
var pav_interval_between_images = 500;


/************************************************************
 * Transfer Test
 ************************************************************/

var transfer_test_color_consistency = [ 'white', 'green', 'white', 'green', 'white', 'yellow', 'white', 'blue', 'white', 'red' ];

var transfer_test_white_duration = 1000;
var transfer_test_color_duration = 1000;
var transfer_test_reps = 1;


/************************************************************
 * Deval Video
 * @video_duration = in seconds
 ************************************************************
*/

var video_MM = '/static/video/MM';
var video_BBQ = '/static/video/BBQ';
var video_TT = '/static/video/TT';

var video_duration = 20;


/************************************************************
 * Deval Test
 ************************************************************/
var deval_test = [ 'white' ];
var deval_test_duration = 5000;
var deval_test_reps = 1;

/************************************************************
 * Thanks
 * @thanks_close 
 ************************************************************
*/
var thanks_close = 'Thank you for the participation!';
var thanks_close_latency_period = 1000;