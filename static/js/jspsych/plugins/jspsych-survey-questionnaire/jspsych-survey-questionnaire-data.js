var Demographics = {
    type: 'Demographics',
    preamble: `
        <p>We would like to ask you a few questions about your personal information to better understand our study
        population. All your responses will be confidential.</p>
    `,
    questions: [
        {
            prompt: 'Gender',
            options: ['Male', 'Female', 'Other'], 
            horizontal: true
        },{
            prompt: 'Age',
            options: ['Years', 'Months'], 
            horizontal: true
        },{
            prompt: 'Height',
            options: ['cm', 'feet'], 
            horizontal: true
        },{
            prompt: 'Weight',
            options: ['kg', 'Pounds'], 
            horizontal: true
        },{
            prompt: 'Education level',
            options: ['Primary', 'Secondary', 'Associate or vocational education', 'Bachelor', 'Masters or above'], 
            horizontal: true
        },{
            prompt: 'Marital status',
            options: ['Married', 'Separated', 'Divorced', 'Widowed', 'Never married'], 
            horizontal: true
        },{
            prompt: 'Employment status',
            options: ['Employed - full time', 'Employed - part-time', 'Self-employed', 'Student', 'Unemployed', 'Retired'], 
            horizontal: true
        },{
            prompt: 'Gross annual household income (US dollars)',
            options: ['< $15,000', '$15,000 - $24,999', '$25,000 - $74,999', '> $75,000'], 
            horizontal: true
        }

    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "Demographics, options",
    event_converted_details: 'Demographics survey appears'
}


var OCIR = {
    type: 'OCI-R',
    preamble: 
        `<p>The following statements refer to experiences that many people have in their everyday lives. Select
        the number that best describes <b>HOW MUCH</b> that experience has <b>DISTRESSED</b> or <b>BOTHERED</b>
        you during the <b>PAST MONTH</b>. The numbers refer to the following verbal labels:</p>`,
    questions: [
        {      
                prompt: "I have saved up so many things that they get in the way.",
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{
                prompt: "I check things more often than necessary.",
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{
                prompt: 'I get upset if objects are not arranged properly.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{
                prompt: 'I feel compelled to count while I am doing things.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{
                prompt: 'I find it difficult to touch an object when I know it has been touched by strangers or certain people.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{
                prompt: 'I find it difficult to control my own thoughts.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{
                prompt: 'I collect things I don’t need.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{
                prompt: 'I repeatedly check doors, windows, drawers, etc.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{
                prompt: 'I get upset if others change the way I have arranged things.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{
                prompt: 'I feel I have to repeat certain numbers.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{ 
                prompt: 'I sometimes have to wash or clean myself simply because I feel contaminated.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{ 
                prompt: 'I am upset by unpleasant thoughts that come into my mind against my will.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{     
                prompt: 'I avoid throwing things away because I am afraid I might need them later.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{
                prompt: 'I repeatedly check gas and water taps and light switches after turning them off.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{
                prompt: 'I need things to be arranged in a particular way.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{
                prompt: 'I feel that there are good and bad numbers.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{
                prompt: 'I wash my hands more often and longer than necessary.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        },{
                prompt: 'I frequently get nasty thoughts and have difficulty in getting rid of them.',
                options: [0, 1, 2, 3, 4],
                horizontal: true
        }
    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "OCI-R, options",
    event_converted_details: 'OCI-R survey appears'
}

var ASRM = {
    type: 'ASRM',
    preamble: `
        <h2><b>Instructions</b></h1>
        <div class="preamble-wrapper"><span>1.</span><p> On this questionnaire are groups of five statements; read each group of statements carefully</p></div>
        <div class="preamble-wrapper"><span>2.</span><p> Choose the one statement in each group that best describes the way you have been feeling for the past week. </p></div>
        <div class="preamble-wrapper"><span>3.</span><p> Click on the number next to the statement you picked</p></div>
        <div class="preamble-wrapper"><span>4.</span><p> Please note: The word “occasionally” when used here means once or twice; “often” means several
        times or more; “frequently” means most of the time.</p></div>
    `,
    questions: [
        {
            prompt: '',
            options: [
                'I do not feel happier or more cheerful than usual.',
                'I occasionally feel happier or more cheerful than usual.',
                'I often feel happier or more cheerful than usual.',
                'I feel happier or more cheerful than usual most of the time.',
                'I feel happier or more cheerful than usual all of the time. '
            ], 
            horizontal: false
        },{
            prompt: '',
            options: [
                'I do not feel more self-confident than usual.',
                'I occasionally feel more self-confident than usual.',
                'I often feel more self-confident than usual',
                'I feel self-confident than usual most of the time.',
                'I feel extremely self-confident all of the time.'
            ], 
            horizontal: false
        },{
            prompt: '',
            options: [
                'I do not need less sleep than usual.',
                'I occasionally need less sleep than usual.',
                'I often need less sleep than usual.',
                'I frequently need less sleep than usual.',
                'I can go all day and night without any sleep and still not feel tired.'
            ], 
            horizontal: false
        },{
            prompt: '',
            options: [
                'I do not talk more than usual.',
                'I occasionally talk more than usual.',
                'I often talk more than usual.',
                'I frequently talk more than usual.',
                'I talk constantly and cannot be interrupted.'
            ], 
            horizontal: false
        },{
            prompt: '',
            options: [
                'I have not been more active (either socially, sexually, at work, home, or school) than usual.',
                'I have occasionally been more active than usual.',
                'I have often been more active than usual.',
                'I have frequently been more active than usual.',
                'I am constantly active or on the go all the time.'
            ], 
            horizontal: false
        }

    ], 
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "ASRM, options",
    event_converted_details: 'ASRM survey appears'

}

var GAD7 = {
    type: 'GAD-7',
    checkboxes: [
        {
            prompt: 'If you checked off <u>any</u> problems, how <u>difficult</u> have these problems made it for you to do your work, take care of things at home, or get along with other people?',
            options: [
                'Not difficult at all', 'Somewhat difficult', 'Very difficult', 'Extremely difficult'                                
            ]
        }
    ],
    questions: [
        {
            prompt: 'Feeling nervous, anxious or on edge',
            options: [0,1,2,3], 
            horizontal: true
        },{
            prompt: 'Not being able to stop or control worrying',
            options: [0,1,2,3], 
            horizontal: true
        },{
            prompt: 'Worrying too much about different things',
            options: [0,1,2,3], 
            horizontal: true
        },{
            prompt: 'Trouble relaxing',
            options: [0,1,2,3], 
            horizontal: true
        },{
            prompt: 'Being so restless that it is hard to sit still',
            options: [0,1,2,3], 
            horizontal: true
        },{
            prompt: 'Becoming easily annoyed or irritable',
            options: [0,1,2,3], 
            horizontal: true
        },{
            prompt: 'Feeling afraid as if something awful might happen',
            options: [0,1,2,3], 
            horizontal: true
        },

    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "GAD-7, options",
    event_converted_details: 'GAD-7 survey appears'
}

var ISI = {
    type: 'ISI',
    questions: [
        {
            prompt: '1. Please rate the current (i.e., last 2 weeks) <b>SEVERITY</b> of your insomnia problem(s).',
            options: [
                {
                    prompt: 'Difficulty falling asleep:',
                    options: [0, 1, 2, 3, 4],
                },
                {
                    prompt: 'Difficulty staying asleep:',
                    options: [0, 1, 2, 3, 4],
                },
                {
                    prompt: 'Problem waking too early:',
                    options: [0, 1, 2, 3, 4],
                }
            ],
            horizontal: true,
            title: ['None', 'Mild', 'Moderate', 'Severe', 'Very']
        },{
            prompt: '2. How <b>SATISFIED</b>/dissatisfied are you with your current sleep pattern?',
            options: [0, 1, 2, 3, 4], 
            horizontal: true,
            title: ['Very Satisfied', 'Very Dissatisfied']
        },{
            prompt: '3. To what extent do you consider your sleep problem to <b>INTERFERE</b> with your daily functioning (e.g. daytime fatigue, ability to function at work/daily chores, concentration, memory, mood, etc.).',
            options: [0, 1, 2, 3, 4], 
            horizontal: true,
            title: ['Not at all Interfering', 'A Little ', 'Somewhat', 'Much', 'Very Much Interfering']
        },{
            prompt: '4. To what extent do you consider your sleep problem to <b>INTERFERE</b> with your daily functioning (e.g. daytime fatigue, ability to function at work/daily chores, concentration, memory, mood, etc.).',
            options: [0, 1, 2, 3, 4], 
            horizontal: true,
            title: ['Not at all Interfering', 'A Little ', 'Somewhat', 'Much', 'Very Much Interfering']
        },{
            prompt: '5. To what extent do you consider your sleep problem to <b>INTERFERE</b> with your daily functioning (e.g. daytime fatigue, ability to function at work/daily chores, concentration, memory, mood, etc.).',
            options: [0, 1, 2, 3, 4], 
            horizontal: true,
            title: ['Not at all', 'A Little ', 'Somewhat', 'Much', 'Very Much']
        },

    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "ISI, options",
    event_converted_details: 'ISI survey appears'
};

var EAT26 = {
    type: 'EAT-26',
    preamble: `
        <p>Please fill out the below form as accurately, honestly and completely as possible. There are no right or wrong answers. All of
        your responses are confidential.</p>
    `,
    questions: [
        {
            prompt: 'Am terrified about being overweight.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'I feel like I act totally on impulse.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Find myself preoccupied with food.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Have gone on eating binges where I feel that I may not be able to stop',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Cut my food into small pieces.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Aware of the calorie content of foods that I eat.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Particularly avoid food with a high carbohydrate content (i.e. bread, rice, potatoes, etc.)',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Feel that others would prefer if I ate more.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Vomit after I have eaten.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Feel extremely guilty after eating.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Am preoccupied with a desire to be thinner.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Think about burning up calories when I exercise',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Other people think that I am too thin.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Am preoccupied with the thought of having fat on my body.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Take longer than others to eat my meals.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Avoid foods with sugar in them.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Eat diet foods.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Feel that food controls my life.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Display self-control around food.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Feel that others pressure me to eat.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Give too much time and thought to food.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Feel uncomfortable after eating sweets.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Engage in dieting behaviour.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Like my stomach to be empty.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Have the impulse to vomit after meals.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },{
            prompt: 'Enjoy trying new rich foods.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },


        {
            prompt: 'Gone on eating where you feel that you may not be able to stop?',
            options: ['Never', 'Once a month or less', '2-3 times a month', 'Once a week', '2-6 times a week', 'Once a day or more'],
            horizontal: true
        },
        {
            prompt: 'Ever made yourself sick (vomited) to control your weight or shape?',
            options: ['Never', 'Once a month or less', '2-3 times a month', 'Once a week', '2-6 times a week', 'Once a day or more'],
            horizontal: true
        },
        {
            prompt: 'Ever used laxatives, diet pills or diuretics (water pills) to control your weight or shape?',
            options: ['Never', 'Once a month or less', '2-3 times a month', 'Once a week', '2-6 times a week', 'Once a day or more'],
            horizontal: true
        },
        {
            prompt: 'Exercised more than 60 minutes a day to lose or to control your weight?',
            options: ['Never', 'Once a month or less', '2-3 times a month', 'Once a week', '2-6 times a week', 'Once a day or more'],
            horizontal: true
        },
        {
            prompt: 'Lost 20 pounds or more in the past 6 months',
            options: ['Yes','No'],
            horizontal: true
        },
        
    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "EAT-26, options",
    event_converted_details: 'EAT-26 survey appears'
};


var PID = {
    type: 'PID-5-BF',
    preamble: `
        <p><b>Instructions</b>: This is a list of things different people might say about themselves. We are interested in how
        you would describe yourself. There are no right or wrong answers. So you can describe yourself as honestly
        as possible, we will keep your responses confidential. We’d like you to take your time and read each
        statement carefully, selecting the response that best describes you.</p>
    `,
    questions: [
        {
            prompt: 'People would describe me as reckless.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I feel like I act totally on impulse.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'Even though I know better, I can’t stop making rash decisions',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I often feel like nothing I do really matters.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'Others see me as irresponsible.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I’m not good at planning ahead.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'My thoughts often don’t make sense to others.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I worry about almost everything.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I get emotional easily, often for very little reason.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I fear being alone in life more than anything else.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I get stuck on one way of doing things, even when it’s clear it won’t work.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I have seen things that weren’t really there',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I steer clear of romantic relationships.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I’m not interested in making friends.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I get irritated easily by all sorts of things.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I don’t like to get too close to people.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'It’s no big deal if I hurt other peoples feelings.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I rarely get enthusiastic about anything.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I crave attention.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I often have to deal with people who are less important than me.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I often have thoughts that make sense to me but that other people say are strange',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I use people to get what I want.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'I often “zone out” and then suddenly come to and realize that a lot of time has passed.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'Things around me often feel unreal, or more real than usual.',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'It is easy for me to take advantage of others.',
            options: [0, 1, 2, 3],
            horizontal: true
        },
    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "PC-PTSD-5, options",
    event_converted_details: 'PC-PTSD-5 survey appears'
};

var PHQ9 = {
    type: 'PHQ-9',
    preamble: 
        `<p><b>Instructions</b>: Over the <b>last 7 days</b>, how often have you been bothered by any of the following problems? (Click
        on the numbers to indicate your answer)</p>`,
    questions: [
        {
            prompt: 'Little interest or pleasure in doing things',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'Feeling down, depressed, or hopeless',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'Trouble falling or staying asleep, or sleeping too much',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'Feeling tired or having little energy',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'Poor appetite or overeating',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'Feeling bad about yourself—or that you are a failure or have let yourself or your family down',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'Trouble concentrating on things, such as reading the newspaper or watching television',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'Moving or speaking so slowly that other people could have noticed? Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual',
            options: [0, 1, 2, 3],
            horizontal: true
        },{
            prompt: 'Thoughts that you would be better off dead or of hurting yourself in some way',
            options: [0, 1, 2, 3],
            horizontal: true
        }
    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "PHQ-9, options",
    event_converted_details: 'PHQ-9 survey appears'
}

var PTSD = {
    type: 'PC-PTSD-5',
    questions: [
        {
            prompt: `
                Sometimes things happen to people that are unusually or especially frightening, horrible, or traumatic. For example:
                <ul>
                    <li>a serious accident or fire</li>
                    <li>a physical or sexual assault or abuse</li>
                    <li>an earthquake or flood</li>
                    <li>a war</li>
                    <li>seeing someone be killed or seriously injured</li>
                    <li>having a loved one die through homicide or suicide</li>
                </ul>
            `,
            options: ['YES', 'NO'],
            horizontal: true
        },{
            prompt: 'had nightmares about the event(s) or thought about the event(s) when you did not want to?',
            options: ['YES', 'NO'],
            horizontal: true
        },{
            prompt: 'tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?',
            options: ['YES', 'NO'],
            horizontal: true
        },{
            prompt: 'been constantly on guard, watchful, or easily startled?',
            options: ['YES', 'NO'],
            horizontal: true
        },{
            prompt: 'felt numb or detached from people, activities, or your surroundings?',
            options: ['YES', 'NO'],
            horizontal: true
        },{
            prompt: 'felt guilty or unable to stop blaming yourself or others for the events(s) or any problems the event(s) may have caused?',
            options: ['YES', 'NO'],
            horizontal: true
        },
    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "PTSD, options",
    event_converted_details: 'PTSD survey appears'
}

var RAADS = {
    type: 'RAADS-14',
    preamble: `
        <p>Please choose one of the following alternatives:</p>
        <p>This is true or describes me now and when I was young.</p>
        <p>This was true or describes me only now (refers to skills acquired).</p>
        <p>This was true only when I was young (16 years or younger).</p>
        <p>This was never true and never described me.</p>
        <p>Please answer the questions according to what is true for you.
        Check only one column per statement!</p>
    `,
    questions: [
        {
            prompt: 'It is difficult for me to understand how other people are feeling when we are talking',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'], 
            horizontal: true
        },{
            prompt: 'Some ordinary textures that do not bother others feel very offensive when they touch my skin',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        },{
            prompt: 'It is very difficult for me to work and function in groups',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        },{
            prompt: 'It is difficult to figure out what other people expect of me',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        },{
            prompt: ' I often don’t know how to act in social situations',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        },{
            prompt: 'I can chat and make small talk with people',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        },{
            prompt: 'When I feel overwhelmed by my senses, I have to isolate myself to shut them down',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        },{
            prompt: 'How to make friends and socialize is a mystery to me',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        },{
            prompt: ' When talking to someone, I have a hard time telling when it is my turn to talk or to listen',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        },{
            prompt: ' Sometimes I have to cover my ears to block out painful noises (like vacuum cleaners or people talking too much or too loudly)',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        },{
            prompt: 'It can be very hard to read someone’s face, hand, and body movements when we are talking',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        },{
            prompt: ' I focus on details rather than the overall idea',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        },{
            prompt: 'I take things too literally, so I often miss what people are trying to say',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        },{
            prompt: 'I get extremely upset when the way I like to do things is suddenly changed',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }

    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "The RAADS-14 Screen, options",
    event_converted_details: 'The RAADS-14 Screen survey appears'
}

var PRIME_R = {
    type: 'PRIME-R',
    title: [
            'Definitely disagree',
            'Somewhat disagree',
            'Slightly disagree',
            'Not sure',
            'Slightly agree',
            'Somewhat agree',
            'Definitely agree',
    ],
    questions: [
        {
            prompt: 'I think that I have felt that there are odd or unusual things going on that I can’t explain.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        },{
            prompt: 'I think that I might be able to predict the future.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        },{
            prompt: 'I may have felt that there could possibly be something interrupting or controlling my thoughts, feelings, or actions.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        },{
            prompt: 'I have had the experience of doing something differently because of superstitions.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        },{
            prompt: 'I think that I may get confused at times whether something I experience or perceive may be real or may be just part of my imagination or dreams',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        },{
            prompt: ' I have thought that it might be possible that other people can read my mid, or that I can read others’ minds.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        },{
            prompt: 'I wonder if people may be planning to hurt me or even may be about to hurt me.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        },{
            prompt: 'I believe that I have special natural or supernatural gifts beyond my talents and natural strengths.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        },{
            prompt: 'I think I might feel like my mind is “playing tricks” on me.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        },{
            prompt: 'I have had the experience of hearing faint or clear sounds of people or a person mumbling or talking when there is no one near me.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        },{
            prompt: 'I think that I may hear my own thoughts being said out loud.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        },{
            prompt: 'I have been concerned that I might be “going crazy”.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        },
    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "PRIME-R, options",
    event_converted_details: 'PRIME-R survey appears'
}