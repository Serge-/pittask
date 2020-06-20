/************************************************************
 * ======================= PARAMETERS =======================
 ************************************************************/
var re_captcha = false;
var re_captcha_duration = 15
var full_screen_mode = false;
var open_instruct_latency = 1500;
var close_instruct_latency = 1500;
var outcome_duration = 1000;
var stim_duration = 3000;
var ITI_duration = 1500;
var correct_text = 'Correct!';
var incorrect_text = 'Incorrect!';
var feedback_duration = 1000;
var popup_text = 'Please provide your answer prior to submission.';
var popup_text_web_forms = 'Sorry, all questions need to be answered prior to submission.';
/************************************************************
 * Vending Machine Animation Parameters
 ***********************************************************/
var left_tilt = 37;
var right_tilt = 39;
var shake_right_rotate = 15;
var shake_right_translateX = 5;
var shake_left_rotate = -15;
var shake_left_translateX = -5;
var shake_return_time = 300;
var shake_transition = 0.05;
/************************************************************
 * ==================== WEB-BASED FORMS ====================
 ************************************************************
 * Key-Testing
 ***********************************************************/
var open_instruct_text_key_testing = "<p>This is a key-testing stage.</p> <p>We need to check whether key presses on your keyboard can be registered.</p> <p>Press any key when you are ready.</p>";
var close_instruct_text_key_testing = "<p>Thank you for your patience.</p> <p>Press any key when you are ready to start the experiement.</p>";
/************************************************************
 * Clinical Open/Close Instruction Text
 ***********************************************************/
var open_instruct_text_clinical = "<p class='v-center-txt'>We'd like to briefly ask you about some symptoms before the online game. <br> Press any key when you are ready. </p>"
var close_instruct_text_clinical = "<p class='v-center-txt'>That's it for the symptom questions. Now we're ready to start the online game. <br> Press any key when you are ready. </p>"
/************************************************************
 * Symptom Inventories
 ***********************************************************/
var OCIR,MOVES,DASS,ASRS5,EAT26,RAADS,PHQ9,GAD7,LSAS,ASRM,PTSD,PRIME_R,AUDIT,PGSI,YIAT,SMOKE_FTND,ISI,PID;
var symptom_inventory_randomization = true;
var symptom_inventory = [
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
/************************************************************
 * Deval Video
 ***********************************************************/
var video_duration = 15;
var video_sound = true;
var open_instruct_video = true;
var open_instruct_text_video = 'One of the snacks has been infested.'
/************************************************************
 * =================== BEHAVIOURAL STAGES ===================
 ************************************************************
 * Food and Hunger Questions
 ***********************************************************/
var FHQ_1 = "How much do you like Tiny Teddies?";
var FHQ_2 = "How much do you like M&Ms?";
var FHQ_3 = "How much do you like BBQ shapes?";
var FHQ_4 = "How hungry do you feel right now?";
var FHQ_1_bottom_text = "Rate the pleasantness of Tiny Teddies";
var FHQ_2_bottom_text = "Rate the pleasantness of M&Ms";
var FHQ_3_bottom_text = "Rate the pleasantness of BBQ shapes";
var vas_left = "Very Unpleasant";
var vas_center = "";
var vas_right = "Very Pleasant";
var vas_left_hungry = "Not at All";
var vas_right_hungry = "Extremely";
/************************************************************
 * VVR
 ************************************************************/
var question_text_a1 = 'Which directions did you tilt to get';
var question_text_a2 = 'Press Left or Right button';
var question_text_b1 = 'How strongly do you believe in your answer?';
var question_text_b2 = 'Very little';
var question_text_b3 = 'Very much';
var question_text_b4 = '<li><span>Please select your answer on the scale.</span></li><li><span>Click \'submit answer\' when ready</span></li>';
/************************************************************
 * Instrumental conditioning [VVR_1]
 ************************************************************/
var open_instruct_VVR1 = true;
var close_instruct_VVR1 = true;
var open_instruct_text_VVR1 = 'You may now interact with the vending machine to earn snacks.';
var close_instruct_text_VVR1 = 'Thank you for your input. Proceeding to the next stage.';
var degrad_pattern_VVR1 = ['d0', 'd0', 'd0', 'd0', 'd0', 'd0'];
var prob_value_VVR1 = [0.6,0.6,0.6,0.6,0.6,0.6];
var interval_duration_VVR1 = 500;
var outcome_duration_VVR1 = 1000;
var interval_num_VVR1 = 60;
var min_blocks_num_VVR1 = 4;
var min_num_correct_VVR1 = 6;
var max_num_incorrect_VVR1 = 4;
/************************************************************
 * Contingency degradation [VVR_2]
 ************************************************************/
var open_instruct_VVR2 = true;
var close_instruct_VVR2 = true;
var open_instruct_text_VVR2 = 'You may now interact with the vending machine to earn snacks.';
var close_instruct_text_VVR2 = 'Thank you for your input. Proceeding to the next stage.';
var degrad_pattern_VVR2 = ['d1', 'd2', 'd2', 'd1', 'd1', 'd2'];
var prob_value_VVR2 = [0.6, 0.6, 0.6, 0.6, 0.6, 0.6];
var interval_duration_VVR2 = 500;
var outcome_duration_VVR2 = 500;
var interval_num_VVR2 = 60;
var min_blocks_num_VVR2 = 4;
var min_num_correct_VVR2 = 6;
var max_num_incorrect_VVR2 = 4;
/************************************************************
 * Contingency restoration [VVR_3]
 ************************************************************/
var open_instruct_VVR3 = true;
var close_instruct_VVR3 = true;
var open_instruct_text_VVR3 = 'You may now interact with the vending machine to earn snacks.';
var close_instruct_text_VVR3 = 'Thank you for your input. Proceeding to the next stage.';
var degrad_pattern_VVR3 = ['d0', 'd0', 'd0', 'd0', 'd0', 'd0'];
var prob_value_VVR3 = [0.6,0.6,0.6,0.6,0.6,0.6];
var interval_duration_VVR3 = 500;
var outcome_duration_VVR3 = 1000;
var interval_num_VVR3 = 60;
var min_blocks_num_VVR3 = 4;
var min_num_correct_VVR3 = 6;
var max_num_incorrect_VVR3 = 4;
/************************************************************
 * Open Instruction Pavlovian Conditioning
 ************************************************************/
var open_instruct_pav = true;
var open_instruct_text_pav = "<p>The vending machine cannot be tipped now. " +
"However, when the machine is overstocked a free snack will fall out.</p><br/>" +
"<p>Coloured lights will appear on the front of the machine when it is overstocked. "+
"Watch the lights and learn which snack will fall out.</p><br/>" +
"<p>Questionnaires will test what you have learnt.</p>" +
"<br/><p>Press any key to begin </p>";
/************************************************************
 * Pavlovian Conditioning
 ************************************************************/
var min_num_correct_pav = 6;
var max_num_incorrect_pav = 4;
/************************************************************
 * Open Instruction Transfer Test
 ************************************************************/
var open_instruct_transfer_test = true;
var open_instruct_text_transfer_test =  "<p>You have found a new vending machine. " +
"It will sometimes be overstocked with different snacks.</p><br/> " +
"<p>You will be able to earn snacks by tipping the machine. However, no snacks will appear on the screen.</p></br> " +
"<p>Remember what you have learned. " +
"Try to get as many snacks as you want. " +
"The amount earned will be recorded.</p>" +
"<br/><p>Press any key to begin </p>";
/************************************************************
 * Transfer Test
 ************************************************************/
var sequence_array_transfer_test = [ 'white', 'green', 'white', 'green', 'white', 'yellow', 'white', 'blue', 'white', 'red' ];
var number_reps_transfer_test = 2;
/************************************************************
 * Deval Test
 ************************************************************/
var sequence_array_deval_test = [ 'white' ];
var number_reps_deval_test = 8;
/************************************************************
 * Thanks
 ************************************************************/
var close_instruct_text_thanks = '<p>Thank you!</p><p>Press any key to return to the Amazon Mechanical Turk page.</p><p>This window will close automatically after any keypress on the keyboard.</p><p>Please do NOT close the window by clicking on the ‘X’ at the top right corner of this window</p>';
