import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function WelcomeScreen() {
  return (
    <div style={{ 
      textAlign: 'center', 
      paddingTop: '100px',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '20px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          fontSize: '3rem',
          color: '#2c3e50',
          marginBottom: '20px',
          fontWeight: '800',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          background: 'linear-gradient(45deg, #2c3e50, #3498db)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Welcome to Silk 🕸️
        </h1>
        
        <p style={{ 
          fontSize: '1.4rem',
          color: '#34495e',
          marginBottom: '40px',
          lineHeight: '1.6',
          fontWeight: '500'
        }}>
          You're safe here. Let's begin cutting through the web.
        </p>
        
        <div style={{ marginTop: '20px' }}>
      <Link to="/quiz">
        <button
          style={{
                padding: '15px 30px',
                fontSize: '1.2rem',
                cursor: 'pointer',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                ':hover': {
                  backgroundColor: '#2980b9',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 8px rgba(0,0,0,0.2)'
                }
              }}
            >
              Start Quiz
        </button>
      </Link>
        </div>
      </div>
    </div>
  );
}

function WebDetectorQuiz() {
  const [responses, setResponses] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  // Add sound effects
  const playClickSound = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3');
    audio.volume = 0.3;
    audio.play();
  };

  const playSuccessSound = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3');
    audio.volume = 0.3;
    audio.play();
  };

  const handleChange = (index) => {
    const newResponses = [...responses];
    newResponses[index] = !newResponses[index];
    setResponses(newResponses);
    setSelectedCount(newResponses.filter(Boolean).length);
    playClickSound();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playSuccessSound();
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
    setSubmitted(true);
  };

  const questions = [
    {
      question: "Do they move fast—too fast emotionally or romantically?",
      tactic: "Love-Bombing (Intensity That Skips Intimacy)",
      howItWorks: "The manipulator overwhelms you with excessive affection, grand gestures, or future-faking early on to create artificial intimacy. This bypasses natural emotional pacing, creating a false sense of deep connection.",
      redFlags: [
        "\"Soulmate\" claims within days/weeks.",
        "Over-the-top gifts, constant praise, or rapid commitment talks (moving in, marriage).",
        "Rushing past your boundaries under the guise of \"passion.\""
      ],
      longTermEffect: "You normalize intensity over stability, making genuine, slow-building relationships feel \"boring.\"",
      emotionalImpact: "At first, you feel adored, special, and \"swept off your feet\" by the sudden romance. But it can also be overwhelming – you might sense things are moving too fast yet doubt yourself because the attention feels so good. Over time, this intensity can make you feel indebted to them and increasingly dependent on their approval, as if the relationship has become the center of your world.",
      metaphor: "It's like a whirlwind or sugar rush – exhilarating at first, but it skips the slow, mutual growth of real intimacy. The relationship flares up like a bright firework that dazzles you, then quickly fades, leaving you in the dark once the sparkle settles.",
      counterStrategy: {
        name: "The Pause Test",
        action: "Deliberately slow their momentum.",
        examples: [
          "If they say, \"You're my soulmate\" too soon: Respond: \"That's a big claim—let's see how we feel in a few months.\"",
          "If they push for quick commitment: Boundary: \"I need time to build trust. If that's a problem, we're not compatible.\""
        ],
        psychology: "Forces them to either respect your pace (revealing sincerity) or escalate (exposing manipulation).",
        powerMove: "\"I'm flattered, but real connection takes time.\""
      }
    },
    {
      question: "Do they make you doubt your memory or instincts?",
      tactic: "Gaslighting",
      howItWorks: "The manipulator denies your reality, twists facts, or insists you're \"overreacting\" to destabilize your self-trust. Over time, you rely on their version of events instead of your own.",
      redFlags: [
        "\"You're too sensitive,\" \"That never happened,\" or \"You're imagining things.\"",
        "You constantly apologize for \"misremembering.\"",
        "You keep journals or recordings to \"prove\" your sanity."
      ],
      longTermEffect: "Erodes your ability to make decisions without external validation.",
      emotionalImpact: "You end up feeling confused and second-guessing yourself constantly. It can be very damaging – you start to question your own judgment, self-worth, and even sanity. You might feel like you're \"going crazy\" or become convinced that you misinterpret everything. This self-doubt and mental fog are exactly what the gaslighter wants, because it makes you more insecure and reliant on them to define reality.",
      metaphor: "It's like being in a hall of mirrors – everything you see and remember is distorted until you can't trust your own eyes. Or like someone slowly dimming the lights and insisting nothing's changed, leading you to feel lost in a fog of self-doubt while they hold the only flashlight.",
      counterStrategy: {
        name: "The Receipts Method",
        action: "Document interactions (texts, emails, voice memos).",
        examples: [
          "When they deny reality: Calmly state, \"I wrote it down when it happened. Here's what I recorded.\"",
          "If they deflect: \"Whether you remember or not, my feelings are valid.\""
        ],
        psychology: "Removes their power to distort facts.",
        powerMove: "\"I don't debate reality. Take it or leave it.\""
      }
    },
    {
      question: "Do they isolate you from people you trust?",
      tactic: "Social Isolation (\"They're Toxic,\" \"They Don't Get Us\")",
      howItWorks: "The manipulator frames friends/family as \"jealous,\" \"controlling,\" or \"bad influences\" to cut off your support system. This makes you dependent on them for validation.",
      redFlags: [
        "They criticize your loved ones' motives.",
        "They guilt you for spending time with others.",
        "You start hiding relationships to avoid conflict."
      ],
      longTermEffect: "You lose objectivity—no outside perspective means no reality checks.",
      emotionalImpact: "You may begin to feel alone and cut off, as your world shrinks to revolve around them. Initially, spending so much time together might feel flattering or intense, but eventually you notice you've drifted from your support network. You might also feel guilty or ashamed for seeing friends or family (or for not noticing the isolation sooner), as if you've done something wrong by \"choosing\" them over your partner. This isolation can leave you dependent on the abusive person for companionship, advice, and emotional needs – making it even harder to reach out for help or to trust your own perspective apart from them.",
      metaphor: "It's like being slowly moved onto a deserted island with just the two of you. At first it seems romantic to be \"away from the world,\" but soon you realize you're cut off from lifelines you need. One by one, the bridges to your friends, family, and community are burned or blocked, until you're stranded with only the manipulator as your source of reality and support.",
      counterStrategy: {
        name: "The Network Audit",
        action: "Preemptive Transparency",
        examples: [
          "Reconnect with your support system privately.",
          "If they criticize loved ones: \"I decide who's in my life. Let's change the subject.\"",
          "If they demand exclusivity: \"Healthy relationships don't require cutting people out.\""
        ],
        psychology: "Shows you're immune to divide-and-conquer tactics.",
        powerMove: "\"My friends/family aren't up for discussion.\""
      }
    },
    {
      question: "Do you feel guilty for asserting your needs or saying no?",
      tactic: "Guilt-Tripping",
      howItWorks: "They frame your boundaries as personal failures (\"After all I've done for you?\") or emotional betrayals (\"I guess you don't care about me\").",
      redFlags: [
        "They play the victim when you say no.",
        "You feel responsible for their emotions.",
        "They use phrases like \"Fine, I'll just suffer alone.\""
      ],
      longTermEffect: "Self-abandonment—you suppress your needs to avoid guilt.",
      emotionalImpact: "You end up feeling like the \"bad guy\" whenever you assert a need or say no. Your own needs start to seem selfish or trivial, because they always make it seem like you're hurting them if you don't comply. Over time, constant guilt-tripping can cause anxiety and self-doubt – you might give in quickly, apologize profusely, or not voice your needs at all, just to avoid that wave of guilt. It wears down your self-esteem, because you're made to feel as though you're always in the wrong; in a sense, you become conditioned to put their feelings first and neglect your own.",
      metaphor: "It's like carrying an invisible debt that never actually gets paid off – no matter how much you do, they keep adding to what you \"owe\" them. You're constantly trying to make up for some vague shortcoming, like a hamster running in a wheel but never reaching the finish line. The weight of the guilt is always on your shoulders, pushing you to concede to their demands just to feel like a \"good\" partner again.",
      counterStrategy: {
        name: "The \"No\" Without Apology",
        action: "Non-Negotiable Framing",
        examples: [
          "Remove justifications. Example: \"I can't do that.\" (No \"sorry\" or \"maybe next time!\")",
          "If they guilt-trip: \"I hear you're upset, but my answer stands.\""
        ],
        psychology: "Guilt relies on your willingness to entertain their narrative. Starve it.",
        powerMove: "\"I don't owe you my discomfort.\""
      }
    },
    {
      question: "Do they alternate between really kind and really cruel?",
      tactic: "Intermittent Reinforcement",
      howItWorks: "Unpredictable rewards (affection, cruelty) keep you hooked, like a slot machine. The brain becomes addicted to the \"maybe\" of kindness.",
      redFlags: [
        "They're warm after being cold, with no accountability.",
        "You rationalize their cruelty as \"stress\" or \"a bad day.\"",
        "You obsess over their moods to predict their behavior."
      ],
      longTermEffect: "Trauma bonding—you confuse pain with love.",
      emotionalImpact: "The roller coaster of affection and cruelty is emotionally exhausting and very confusing. During the loving phases, you feel hopeful, relieved, even euphoric – these moments convince you that the relationship can be wonderful. During the cruel phases, you feel hurt, anxious, and desperate to get back in their good graces. Paradoxically, the sharp contrast makes you bond more deeply: the brief \"highs\" of kindness reinforce your attachment and make you willing to endure the lows, constantly chasing that honeymoon phase again. You might find yourself rationalizing the bad behavior (\"They're stressed\" or \"It's my fault for upsetting them\") because when they are kind, it's so good that you don't want to lose it. This intermittent reward system can make it extremely hard to break away – it creates a trauma bond where you feel addicted to the cyclical hope and payoff.",
      metaphor: "It's like being on a roller coaster that you can't get off – exhilarating highs followed by stomach-dropping lows. Or like a slot machine: most pulls bring nothing but heartbreak, yet every now and then you get just enough of a jackpot (affection) to keep you hooked, pulling the lever again and again. The unpredictability itself becomes the trap, binding you to the cycle.",
      counterStrategy: {
        name: "The Detox Protocol",
        action: "Predictable Withdrawal",
        examples: [
          "When they're cruel: Disengage immediately. No anger, no pleading.",
          "When they're kind: Stay neutral. \"Glad you're in a better mood.\"",
          "End the cycle: \"I'm done with rollercoaster dynamics. Take care.\""
        ],
        psychology: "Removes their power to addict you with \"maybe\" rewards.",
        powerMove: "\"I'm not a slot machine for your moods.\""
      }
    },
    {
      question: "Do you feel like you owe them something?",
      tactic: "Emotional Debt Traps",
      howItWorks: "They keep score of favors, gifts, or sacrifices to create a sense of obligation. You feel indebted, so you tolerate poor treatment.",
      redFlags: [
        "\"I did X for you, so you owe me Y.\"",
        "They resent your independence.",
        "You feel pressured to \"repay\" them emotionally/physically."
      ],
      longTermEffect: "Resentment and eroded self-worth.",
      emotionalImpact: "You carry a constant sense of guilt and obligation, as if asserting yourself or setting boundaries would mean you're betraying or cheating them. You might feel trapped – how can you leave or say no when you \"owe\" them so much? The gratitude or loyalty you naturally felt becomes coerced: you start doing things not out of love, but out of fear of being labeled ungrateful. This can lead to walking on eggshells and an inability to prioritize your own well-being, because any refusal triggers intense guilt, like you're defaulting on a moral debt. Over time, this burden can crush your self-confidence; you begin to believe you don't deserve to refuse or that you'd be a bad person to ever hurt or leave them given their \"sacrifices.\"",
      metaphor: "Imagine a gift wrapped in chains – it looks like kindness, but accepting it locks you into an unwritten contract. Their favors come with invisible strings attached. You find yourself tied up by these strings of obligation, like a puppet whose movements are controlled by the debts you supposedly owe. In a healthy relationship, kindness is given freely; here, it's more like a bank loan that accumulates interest and never really ends.",
      counterStrategy: {
        name: "The Ledger Reset",
        action: "Preemptive Refusal",
        examples: [
          "Reject unrequested \"favors\": \"I didn't ask for this, so there's no debt.\"",
          "If they keep score: \"Gifts with strings aren't gifts.\""
        ],
        psychology: "Reframes their \"generosity\" as the control tactic it is.",
        powerMove: "\"I'm not an investment. Stop keeping score.\""
      }
    },
    {
      question: "Do they make you feel 'special' in a way that feels hard to leave?",
      tactic: "Identity Entanglement",
      howItWorks: "They fuse your self-worth with their approval (\"No one will ever love you like I do\"). You fear losing not just them, but your sense of self.",
      redFlags: [
        "They claim to be your \"only true supporter.\"",
        "You lose hobbies, values, or friendships to align with them.",
        "The thought of leaving feels like losing your identity."
      ],
      longTermEffect: "Identity collapse—you don't know who you are without them.",
      emotionalImpact: "You likely feel deeply flattered and bonded. Being told you're so important to someone, or feeling like you're the only one who can help them, feeds a sense of purpose and attachment. However, that flattery comes with chains: you may feel guilt, fear, or intense responsibility at the thought of ending the relationship or even taking time for yourself. It's not just losing them; it feels like you'd be losing a part of yourself or abandoning a special mission. Over time, you might notice you've let go of other parts of your life – hobbies, friendships, even pieces of your personality – to keep this bond intact. Your world and identity narrow to revolve around keeping that person happy. This erosion of your independent identity can leave you feeling hollow or unsure who you are outside of the relationship.",
      metaphor: "It's like two vines growing tightly entwined around each other – they've wrapped around you so much that pulling away feels like tearing out roots. Or think of being cast in a role in a play that only you can fill; you're made to believe if you step off the stage, the show (and the other person) will collapse. In short, they've tangled their identity with yours so deeply that leaving feels like losing a piece of yourself, which is exactly what makes this trap so powerful.",
      counterStrategy: {
        name: "The Self-Reclamation",
        action: "The \"Who Was I?\" Exercise",
        examples: [
          "List 5 things you loved before them (hobbies, values, quirks).",
          "Reintroduce one weekly, regardless of their reaction."
        ],
        psychology: "Rebuilds neural pathways tied to autonomy.",
        powerMove: "\"I'm rediscovering myself. You'll adjust or go.\""
      }
    },
    {
      question: "Do you feel like you're shrinking or silencing yourself around them?",
      tactic: "Boundary Erosion",
      howItWorks: "They punish subtle displays of autonomy (opinions, preferences) until you self-censor to avoid conflict.",
      redFlags: [
        "You downplay your achievements to avoid their jealousy.",
        "You avoid topics that trigger their anger.",
        "You feel like a \"shell\" of yourself."
      ],
      longTermEffect: "Chronic self-betrayal leads to anxiety/depression.",
      emotionalImpact: "You begin to feel like a shrinking version of yourself. Instead of a partner or equal, you feel more like a child who's always in the wrong, or an object with no say. It's common to experience low self-worth, depression, or a sense of helplessness. You might think, \"Nothing I do is ever right,\" and indeed the abuser often reinforces that by finding fault in whatever you do. Over time, you become anxious and hypervigilant about not upsetting them – your life revolves around avoiding their anger or disapproval. This might mean constantly monitoring your words and actions, giving up hobbies or relationships they don't like, and ignoring your own needs. Ultimately, your personal boundaries – the lines that define you – have been worn down so much that you feel almost invisible. You \"go along to get along,\" losing the confident, vibrant parts of yourself in order to survive the relationship.",
      metaphor: "Imagine a brightly colored painting left out in harsh sunlight day after day – the colors slowly fade away. Similarly, under constant criticism and control, your bright sense of self bleaches out over time. You become like a turtle that's learned to stay in its shell; it feels safer to hide your true thoughts and feelings. In the end, you occupy less and less space in your own life – as if you're shrinking into a corner, while the manipulator's presence looms large over everything.",
      counterStrategy: {
        name: "The Zero-Tolerance Policy",
        action: "The \"Three Strikes\" Rule",
        examples: [
          "1st violation: \"I don't like that. Don't do it again.\"",
          "2nd violation: \"I warned you. Next time, I walk.\"",
          "3rd violation: Leave. No explanation."
        ],
        psychology: "Conditions them to respect your limits or lose access.",
        powerMove: "\"My boundaries aren't negotiations.\""
      }
    },
    {
      question: "Do they punish you with silence or withdrawal when upset?",
      tactic: "Stonewalling",
      howItWorks: "They use silence as a weapon to force compliance or guilt-trip you into apologizing for nonexistent offenses.",
      redFlags: [
        "They ignore you for days after minor disagreements.",
        "You feel frantic to \"fix\" things to end the silence.",
        "They deny they're punishing you (\"I'm just busy\")."
      ],
      longTermEffect: "Emotional exhaustion and hypervigilance.",
      emotionalImpact: "You feel anxious and desperate when they withdraw, constantly trying to 'fix' things to regain their attention. The silence feels like punishment, and you start walking on eggshells to avoid triggering their withdrawal. Over time, you become hypervigilant about their moods and reactions, always trying to prevent the next silent treatment.",
      metaphor: "It's like being trapped in a soundproof room – you can see them through the glass, but no matter how much you try to communicate, they remain silent. The more you try to break through, the more they reinforce the barrier, leaving you feeling isolated and desperate for any sign of connection.",
      counterStrategy: {
        name: "The Silent Treatment Response",
        action: "Refuse to chase their approval during silence.",
        examples: [
          "When they withdraw: \"I'll talk when you're ready to communicate respectfully. Until then, I'll live my life.\"",
          "If they deny it's punishment: \"Whether you call it busy or not, your silence is hurtful.\""
        ],
        psychology: "Removes the power from their silence by not reacting to it.",
        powerMove: "\"Your silence speaks volumes, but I won't beg for your attention.\""
      }
    },
    {
      question: "Do they twist your words to make you sound unreasonable?",
      tactic: "Word Salad",
      howItWorks: "They distort your statements into absurd or offensive versions to derail conversations.",
      redFlags: [
        "You say: \"I need space.\" They reply: \"So you hate me now?\"",
        "Conversations feel like circular arguments.",
        "You constantly find yourself explaining what you 'really meant'"
      ],
      longTermEffect: "Self-censorship and communication anxiety.",
      emotionalImpact: "You start doubting your ability to communicate clearly. Every conversation feels like walking through a minefield, where your words might be twisted against you. You become hesitant to express yourself, constantly rehearsing what you'll say to avoid misinterpretation. Over time, you may stop sharing your thoughts altogether to avoid the exhausting process of defending your words.",
      metaphor: "It's like trying to have a conversation in a hall of mirrors – your words get distorted and reflected back to you in unrecognizable ways. No matter how clearly you try to express yourself, your message gets warped and twisted until you're left questioning your own sanity.",
      counterStrategy: {
        name: "The Clear Boundary Method",
        action: "Refuse to engage in word-twisting games.",
        examples: [
          "When they distort your words: \"I said what I meant. If you misrepresent me again, this conversation is over.\"",
          "If they continue: \"I'm not playing this game. Let me know when you're ready to have a real conversation.\""
        ],
        psychology: "Removes their power to derail conversations through distortion.",
        powerMove: "\"I won't defend my words against your distortions.\""
      }
    },
    {
      question: "Do they compare you to others to make you feel inadequate?",
      tactic: "Triangulation",
      howItWorks: "They use real or fictional rivals (\"My ex would never…\") to create insecurity.",
      redFlags: [
        "\"Why can't you be more like [person]?\"",
        "They flirt with others to provoke jealousy.",
        "They frequently mention how others treat them better"
      ],
      longTermEffect: "Erodes self-esteem and fosters toxic competition.",
      emotionalImpact: "You constantly feel like you're in competition with others, never quite measuring up. Their comparisons make you doubt your worth and abilities. You might find yourself trying harder to please them, only to have the goalposts constantly moved. Over time, you lose confidence in your own value and become dependent on their approval.",
      metaphor: "It's like being in a never-ending beauty pageant where the judges keep changing the criteria, and you're always the runner-up. No matter how hard you try, there's always someone else who's 'better' in their eyes, keeping you in a perpetual state of striving and never quite reaching the mark.",
      counterStrategy: {
        name: "The Comparison Cutoff",
        action: "Refuse to engage in comparison games.",
        examples: [
          "When they compare you: \"Compare me again, and I'll remove myself from this dynamic.\"",
          "If they mention others: \"If you prefer how others treat you, you're free to pursue those relationships.\""
        ],
        psychology: "Removes their power to manipulate through comparison.",
        powerMove: "\"I'm not in competition with anyone for your approval.\""
      }
    },
    {
      question: "Do they demand access to your phone/social media?",
      tactic: "Surveillance Control",
      howItWorks: "Positions invasion of privacy as \"trust-building\" to isolate you.",
      redFlags: [
        "They accuse you of cheating with no evidence.",
        "You delete messages to avoid drama.",
        "They insist on knowing all your passwords"
      ],
      longTermEffect: "Paranoia and loss of autonomy.",
      emotionalImpact: "You feel constantly watched and controlled, as if you're under surveillance. Your private communications become sources of anxiety rather than comfort. You might start self-censoring or deleting innocent messages to avoid conflict. Over time, you lose your sense of privacy and autonomy, feeling like you're always under suspicion.",
      metaphor: "It's like living in a glass house where every move is monitored and scrutinized. Your private spaces become public property, and you're constantly performing for an audience of one, never able to truly relax or be yourself.",
      counterStrategy: {
        name: "The Privacy Protection Plan",
        action: "Firmly maintain your boundaries around privacy.",
        examples: [
          "When they demand access: \"My privacy isn't negotiable. Trust me or don't—your choice.\"",
          "If they accuse you: \"Your accusations say more about you than about me.\""
        ],
        psychology: "Reclaims your right to privacy and autonomy.",
        powerMove: "\"My phone is not up for discussion.\""
      }
    },
    {
      question: "Do they blame you for their reactions?",
      tactic: "Emotional Hijacking",
      howItWorks: "Claims their outbursts are your fault (\"Look what you made me do!\").",
      redFlags: [
        "You apologize for their anger.",
        "They threaten self-harm if you leave.",
        "They say you 'provoked' their bad behavior"
      ],
      longTermEffect: "Walking on eggshells to avoid \"triggering\" them.",
      emotionalImpact: "You feel responsible for their emotions and reactions, constantly trying to manage their moods. Their outbursts leave you feeling guilty and confused, even when you've done nothing wrong. Over time, you become hypervigilant about avoiding anything that might 'trigger' them, losing your sense of what's reasonable behavior.",
      metaphor: "It's like being held hostage by their emotions – you're constantly trying to defuse a bomb that could go off at any moment. Their emotional explosions become your responsibility to prevent, and you're always walking on eggshells, afraid of setting them off.",
      counterStrategy: {
        name: "The Emotional Responsibility Reset",
        action: "Refuse to accept responsibility for their emotions.",
        examples: [
          "When they blame you: \"You're responsible for your actions. Full stop.\"",
          "If they threaten self-harm: \"I'll call emergency services if you're in danger, but I won't stay out of fear.\""
        ],
        psychology: "Reclaims your emotional autonomy and boundaries.",
        powerMove: "\"Your feelings are your responsibility, not mine.\""
      }
    },
    {
      question: "Do they sabotage your achievements or milestones?",
      tactic: "Success Sabotage",
      howItWorks: "Undermines your joy (e.g., ghosting you on your birthday) to keep you small.",
      redFlags: [
        "They \"forget\" important events.",
        "They dismiss your accomplishments (\"Big deal\").",
        "They create drama during your special moments"
      ],
      longTermEffect: "Internalized shame for wanting recognition.",
      emotionalImpact: "You start doubting whether your achievements are worth celebrating. Their dismissive or sabotaging behavior makes you feel guilty for wanting recognition. Over time, you might stop sharing your successes or even downplay them to avoid their negative reactions. Your joy becomes tainted with anxiety about how they'll respond.",
      metaphor: "It's like trying to light a candle in a windstorm – every time you try to celebrate your light, they create a gust to blow it out. Your achievements become sources of tension rather than joy, and you learn to keep your successes small to avoid their sabotage.",
      counterStrategy: {
        name: "The Success Celebration Strategy",
        action: "Celebrate your achievements regardless of their response.",
        examples: [
          "When they dismiss your success: \"I celebrate my wins—with or without you.\"",
          "If they create drama: \"I won't let your mood ruin my celebration.\""
        ],
        psychology: "Reclaims your right to celebrate and be proud of your achievements.",
        powerMove: "\"My success isn't up for debate.\""
      }
    },
    {
      question: "Do they insist they \"know you better than you know yourself\"?",
      tactic: "Identity Override",
      howItWorks: "Dismisses your feelings/choices as \"wrong\" to dominate your self-perception.",
      redFlags: [
        "\"You don't really want that.\"",
        "They define your personality for you.",
        "They tell you how you 'really' feel"
      ],
      longTermEffect: "Loss of identity and decision-making paralysis.",
      emotionalImpact: "You start doubting your own thoughts, feelings, and choices. Their constant assertions about who you 'really' are create confusion about your own identity. Over time, you become dependent on their interpretation of your experiences, losing trust in your own perceptions. Making decisions becomes increasingly difficult as you second-guess yourself.",
      metaphor: "It's like having someone constantly repainting your portrait – they keep telling you the colors are wrong, the shape is off, until you can't recognize yourself in the mirror anymore. Your reflection becomes distorted through their lens, and you lose sight of your true image.",
      counterStrategy: {
        name: "The Identity Reclamation",
        action: "Reassert your authority over your own identity.",
        examples: [
          "When they define you: \"I'm the authority on me. Period.\"",
          "If they dismiss your feelings: \"My feelings are valid, whether you understand them or not.\""
        ],
        psychology: "Reclaims your right to define yourself and your experiences.",
        powerMove: "\"I know myself better than anyone else.\""
      }
    },
    {
      question: "Do they use gifts/acts of service to manipulate you later?",
      tactic: "Covert Contracts",
      howItWorks: "Does \"nice\" things with unstated strings attached (\"After all I've done…\").",
      redFlags: [
        "Gifts come before demands.",
        "They keep a mental ledger of favors.",
        "They remind you of their 'generosity' when you disagree"
      ],
      longTermEffect: "Resentment and transactional relationships.",
      emotionalImpact: "You start feeling guilty for accepting any kindness, knowing it will be used against you later. Their 'generosity' becomes a source of anxiety rather than joy. Over time, you might refuse their help or gifts to avoid future manipulation, or you might feel trapped in a cycle of trying to 'repay' their kindness.",
      metaphor: "It's like receiving a beautifully wrapped gift that turns out to be a Trojan horse – what appears to be generosity is actually a vehicle for control. Each 'gift' comes with invisible strings that slowly wrap around you, binding you to their expectations.",
      counterStrategy: {
        name: "The Gift Refusal Protocol",
        action: "Reject manipulative gifts and favors.",
        examples: [
          "When they use past favors: \"I don't accept gifts with invisible strings.\"",
          "If they keep score: \"Kindness shouldn't come with a price tag.\""
        ],
        psychology: "Removes their power to create obligation through 'generosity'.",
        powerMove: "\"Your gifts don't buy my compliance.\""
      }
    },
    {
      question: "Do they pressure you to forgive them instantly?",
      tactic: "False Reconciliation",
      howItWorks: "Rushes forgiveness (\"Get over it!\") to avoid accountability.",
      redFlags: [
        "\"Why are you still upset?\"",
        "They love-bomb after abuse to \"reset\" the relationship.",
        "They demand immediate forgiveness"
      ],
      longTermEffect: "Normalizes abuse cycles.",
      emotionalImpact: "You feel pressured to suppress your hurt and move on before you're ready. Their rush to 'forgive and forget' makes you doubt whether your feelings are valid. Over time, you might stop expressing hurt altogether, knowing it will be dismissed or used against you. The cycle of hurt and rushed reconciliation becomes normalized.",
      metaphor: "It's like being forced to eat a meal before the previous one has digested – there's no time to process what happened before being expected to move on. Your emotional digestion is constantly interrupted, leaving you with unresolved pain that builds up over time.",
      counterStrategy: {
        name: "The Healing Timeline Protection",
        action: "Insist on your right to process hurt in your own time.",
        examples: [
          "When they rush forgiveness: \"Forgiveness is earned, not demanded.\"",
          "If they love-bomb: \"Your kindness now doesn't erase what happened then.\""
        ],
        psychology: "Reclaims your right to heal at your own pace.",
        powerMove: "\"I'll forgive when I'm ready, not when you demand it.\""
      }
    },
    {
      question: "Do they frame their demands as \"tests\" of your love?",
      tactic: "Loyalty Testing",
      howItWorks: "Creates arbitrary hoops (e.g., \"Cut off your friend\") to prove devotion.",
      redFlags: [
        "\"If you loved me, you'd ______.\"",
        "Tests escalate over time.",
        "They create situations to test your loyalty"
      ],
      longTermEffect: "You abandon your values to \"prove\" loyalty.",
      emotionalImpact: "You constantly feel like you're being tested, never quite sure if you've proven your love enough. Their demands make you question whether you're a good partner, and you might start compromising your values to pass their 'tests.' Over time, you lose sight of your own boundaries as you try to meet their ever-increasing demands.",
      metaphor: "It's like being in a never-ending obstacle course where the hurdles keep getting higher and the rules keep changing. No matter how many hoops you jump through, there's always another test waiting, keeping you in a perpetual state of trying to prove your worth.",
      counterStrategy: {
        name: "The Test Refusal Strategy",
        action: "Refuse to participate in loyalty tests.",
        examples: [
          "When they test you: \"Love doesn't come with pop quizzes. Stop testing me.\"",
          "If they make demands: \"My love isn't measured by how many hoops I'll jump through.\""
        ],
        psychology: "Removes their power to manipulate through testing.",
        powerMove: "\"I won't prove my love through your tests.\""
      }
    }
  ];

  const score = responses.filter(Boolean).length;
  const flaggedQuestions = questions.filter((_, index) => responses[index]);

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        opacity: 0.1,
        animation: 'float 6s ease-in-out infinite'
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          fontSize: '3rem',
          transform: 'rotate(-15deg)',
          animation: 'float 4s ease-in-out infinite'
        }}>🚩</div>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          fontSize: '4rem',
          transform: 'rotate(15deg)',
          animation: 'float 5s ease-in-out infinite'
        }}>⚠️</div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '15%',
          fontSize: '3.5rem',
          transform: 'rotate(-10deg)',
          animation: 'float 4.5s ease-in-out infinite'
        }}>🔍</div>
        <div style={{
          position: 'absolute',
          bottom: '25%',
          right: '5%',
          fontSize: '3rem',
          transform: 'rotate(20deg)',
          animation: 'float 5.5s ease-in-out infinite'
        }}>🎯</div>
      </div>

      {/* Progress indicator */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '10px 20px',
        borderRadius: '20px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        zIndex: 1000,
        animation: 'pulse 2s infinite'
      }}>
        <span style={{ fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>
          Red Flags Found: {selectedCount} 🚩
        </span>
      </div>

      {/* Confetti effect */}
      {showConfetti && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 1000
        }}>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: '-10px',
                left: `${Math.random() * 100}%`,
                width: '10px',
                height: '10px',
                backgroundColor: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f'][Math.floor(Math.random() * 4)],
                borderRadius: '50%',
                animation: `confetti ${Math.random() * 3 + 2}s linear forwards`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
      )}

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '20px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        padding: '30px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          padding: '30px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '15px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem',
            color: '#2c3e50',
            marginBottom: '15px',
            fontWeight: '800',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            letterSpacing: '0.5px',
            background: 'linear-gradient(45deg, #2c3e50, #3498db)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🎮 Manipulation Shield: The Game
          </h2>
          
          <p style={{ 
            fontSize: '1.4rem',
            color: '#34495e',
            marginBottom: '0',
            fontStyle: 'italic',
            lineHeight: '1.6',
            fontWeight: '500',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            Level up your emotional defense skills and spot the red flags!
          </p>
        </div>

      {!submitted ? (
          <form onSubmit={handleSubmit} style={{ maxWidth: '100%', margin: '0 auto' }}>
            <div style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              minHeight: '500px',
              position: 'relative'
            }}>
              <p style={{ 
                fontSize: '1.2rem',
                color: '#34495e',
                marginBottom: '25px',
                textAlign: 'center',
                lineHeight: '1.6',
                fontWeight: '500'
              }}>
                Click on the red flags you've noticed in your situation. Be honest with yourself.
              </p>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px',
                padding: '20px'
              }}>
          {questions.map((q, idx) => {
            // Split the question into parts to emphasize key words
            const parts = q.question.split(/(\b\w+\b)/g);
            const emphasizedQuestion = parts.map((part, i) => {
              const lowerPart = part.toLowerCase();
              if (['do', 'they', 'you', 'your', 'feel', 'like', 'that', 'this', 'their', 'them', 'the', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'with', 'by', 'from', 'of', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', '?', '!', ',', '.', ';', ':', '"', "'", '(', ')', '[', ']', '{', '}'].includes(lowerPart)) {
                return part;
              }
              return <span key={i} style={{ fontWeight: '600', color: '#2c3e50' }}>{part}</span>;
            });

            return (
              <div 
                key={idx}
                onClick={() => handleChange(idx)}
                style={{ 
                  position: 'relative',
                  padding: '25px',
                  backgroundColor: responses[idx] ? '#fff5f5' : '#f8f9fa',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: `3px solid ${responses[idx] ? '#e74c3c' : '#e0e0e0'}`,
                  boxShadow: responses[idx] ? '0 8px 16px rgba(231, 76, 60, 0.2)' : '0 4px 8px rgba(0,0,0,0.1)',
                  transform: responses[idx] ? 'scale(1.05)' : 'scale(1)',
                  animation: responses[idx] ? 'bounce 0.5s' : 'none',
                  ':hover': {
                    backgroundColor: '#fff5f5',
                    borderColor: '#e74c3c',
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(231, 76, 60, 0.2)'
                  }
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '2rem',
                  backgroundColor: responses[idx] ? '#e74c3c' : '#95a5a6',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  animation: responses[idx] ? 'spin 0.5s' : 'none'
                }}>
                  {responses[idx] ? '🚩' : '?'}
                </div>
                <p style={{ 
                  fontSize: '1.2rem',
                  color: '#34495e',
                  lineHeight: '1.6',
                  marginTop: '20px',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>
                  {emphasizedQuestion}
                </p>
              </div>
            );
          })}
              </div>
              
              <div style={{ 
                textAlign: 'center',
                marginTop: '30px'
              }}>
                <button 
                  type="submit" 
                  style={{ 
                    padding: '15px 30px',
                    fontSize: '1.2rem',
                    backgroundColor: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontWeight: '600',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    animation: 'pulse 2s infinite',
                    ':hover': {
                      backgroundColor: '#2980b9',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 8px rgba(0,0,0,0.2)'
                    }
                  }}
                >
            See Results
          </button>
              </div>
            </div>
        </form>
      ) : (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Results Header with Animation */}
            <div style={{
              textAlign: 'center',
              marginBottom: '40px',
              padding: '30px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '15px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              animation: 'slideDown 0.5s ease-out'
            }}>
              <h3 style={{ 
                fontSize: '2.2rem',
                color: '#2c3e50',
                marginBottom: '15px',
                fontWeight: '800',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                letterSpacing: '0.5px',
                background: 'linear-gradient(45deg, #2c3e50, #3498db)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Your Results
              </h3>
            </div>
            
            {/* Score Summary with Visual Feedback */}
            <div style={{ 
              marginBottom: '30px',
              padding: '25px',
              backgroundColor: '#f8f9fa',
              borderRadius: '15px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              borderLeft: `8px solid ${
                score === 0 ? '#2ecc71' :
                score <= 2 ? '#f1c40f' :
                score <= 4 ? '#e67e22' :
                '#e74c3c'
              }`,
              animation: 'fadeIn 0.5s ease-out'
            }}>
              <p style={{ 
                fontSize: '1.3rem',
                marginBottom: '15px',
                color: '#2c3e50',
                fontWeight: '600'
              }}>
                You identified <span style={{ 
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: '#e74c3c'
                }}>{score}</span> out of {questions.length} red flags
              </p>
              
              {score === 0 && (
                <div style={{ 
                  padding: '15px',
                  backgroundColor: '#e6ffe6',
                  borderRadius: '10px',
                  animation: 'pulse 2s infinite'
                }}>
                  <p style={{ margin: '0', color: '#27ae60', fontSize: '1.1rem' }}>
                    🎉 Great job! You're probably safe in this situation. But keep trusting your instincts!
                  </p>
                </div>
              )}
              
              {score >= 1 && score <= 2 && (
                <div style={{ 
                  padding: '15px',
                  backgroundColor: '#fff3e6',
                  borderRadius: '10px',
                  animation: 'pulse 2s infinite'
                }}>
                  <p style={{ margin: '0', color: '#d35400', fontSize: '1.1rem' }}>
                    ⚠️ There may be mild manipulation patterns. Stay aware and keep your boundaries strong!
                  </p>
                </div>
              )}
              
              {score >= 3 && score <= 4 && (
                <div style={{ 
                  padding: '15px',
                  backgroundColor: '#ffe6e6',
                  borderRadius: '10px',
                  animation: 'pulse 2s infinite'
                }}>
                  <p style={{ margin: '0', color: '#c0392b', fontSize: '1.1rem' }}>
                    🚨 You're likely experiencing manipulative behavior. Trust your gut and set clear boundaries!
                  </p>
                </div>
              )}
              
              {score >= 5 && (
                <div style={{ 
                  padding: '15px',
                  backgroundColor: '#ffcccc',
                  borderRadius: '10px',
                  animation: 'pulse 2s infinite'
                }}>
                  <p style={{ margin: '0', color: '#7f0000', fontSize: '1.1rem' }}>
                    🔥 This shows strong signs of emotional manipulation. You deserve safety and clarity. Reach out for support!
                  </p>
                </div>
              )}
            </div>

            {/* Red Flag Details with Interactive Cards */}
            {flaggedQuestions.length > 0 && (
              <div style={{ marginTop: '30px' }}>
                <div style={{
                  textAlign: 'center',
                  marginBottom: '40px',
                  padding: '20px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  animation: 'slideUp 0.5s ease-out'
                }}>
                  <h4 style={{ 
                    fontSize: '1.8rem',
                    color: '#2c3e50',
                    marginBottom: '15px',
                    fontWeight: '800',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                    letterSpacing: '0.5px',
                    background: 'linear-gradient(45deg, #2c3e50, #3498db)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Details About the Red Flags You Identified
                  </h4>
                </div>
                
                {flaggedQuestions.map((q, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      marginBottom: '30px', 
                      padding: '25px', 
                      border: '1px solid #e0e0e0', 
                      borderRadius: '15px',
                      backgroundColor: '#fff',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      animation: `slideUp 0.5s ease-out ${idx * 0.1}s forwards`,
                      opacity: 0,
                      transform: 'translateY(20px)',
                      ':hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <h5 style={{ 
                      color: '#2c3e50',
                      fontSize: '1.3rem',
                      marginBottom: '15px',
                      fontWeight: '700',
                      borderBottom: '2px solid #f0f0f0',
                      paddingBottom: '10px'
                    }}>
                      {q.question}
                    </h5>
                    
                    <h6 style={{ 
                      color: '#e74c3c',
                      fontSize: '1.2rem',
                      marginBottom: '20px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <span>🚩</span> {q.tactic}
                    </h6>
                    
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: '20px',
                      marginBottom: '20px'
                    }}>
                      <div style={{ 
                        padding: '15px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '10px',
                        borderLeft: '4px solid #3498db'
                      }}>
                        <h6 style={{ 
                          color: '#2c3e50',
                          fontSize: '1.1rem',
                          marginBottom: '10px',
                          fontWeight: '600'
                        }}>
                          How It Works
                        </h6>
                        <p style={{ 
                          color: '#444',
                          lineHeight: '1.6',
                          margin: '0'
                        }}>
                          {q.howItWorks}
                        </p>
                      </div>

                      <div style={{ 
                        padding: '15px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '10px',
                        borderLeft: '4px solid #e74c3c'
                      }}>
                        <h6 style={{ 
                          color: '#2c3e50',
                          fontSize: '1.1rem',
                          marginBottom: '10px',
                          fontWeight: '600'
                        }}>
                          Red Flags
                        </h6>
                        <ul style={{ 
                          margin: '0',
                          paddingLeft: '20px',
                          color: '#444',
                          lineHeight: '1.6'
                        }}>
                          {q.redFlags.map((flag, i) => (
                            <li key={i} style={{ 
                              marginBottom: '8px',
                              position: 'relative',
                              paddingLeft: '25px'
                            }}>
                              <span style={{
                                position: 'absolute',
                                left: '0',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#e74c3c'
                              }}>•</span>
                              {flag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: '20px'
                    }}>
                      <div style={{ 
                        padding: '15px',
                        backgroundColor: '#fff5e6',
                        borderRadius: '10px',
                        borderLeft: '4px solid #f39c12'
                      }}>
                        <h6 style={{ 
                          color: '#d35400',
                          fontSize: '1.1rem',
                          marginBottom: '10px',
                          fontWeight: '600'
                        }}>
                          Emotional Impact
                        </h6>
                        <p style={{ 
                          color: '#7f4c00',
                          lineHeight: '1.6',
                          margin: '0'
                        }}>
                          {q.emotionalImpact}
                        </p>
                      </div>

                      <div style={{ 
                        padding: '15px',
                        backgroundColor: '#f0f7ff',
                        borderRadius: '10px',
                        borderLeft: '4px solid #3498db'
                      }}>
                        <h6 style={{ 
                          color: '#2980b9',
                          fontSize: '1.1rem',
                          marginBottom: '10px',
                          fontWeight: '600'
                        }}>
                          Metaphor/Analogy
                        </h6>
                        <p style={{ 
                          color: '#2c3e50',
                          lineHeight: '1.6',
                          margin: '0'
                        }}>
                          {q.metaphor}
                        </p>
                      </div>
                    </div>

                    <div style={{ 
                      marginTop: '20px',
                      padding: '20px',
                      backgroundColor: '#e6f3ff',
                      borderRadius: '10px',
                      borderLeft: '4px solid #2980b9',
                      animation: 'pulse 2s infinite'
                    }}>
                      <h6 style={{ 
                        color: '#2c3e50',
                        fontSize: '1.2rem',
                        marginBottom: '15px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <span>🛡️</span> Counter-Strategy: {q.counterStrategy.name}
                      </h6>
                      
                      <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px'
                      }}>
                        <div>
                          <p style={{ 
                            color: '#444',
                            lineHeight: '1.6',
                            margin: '0 0 10px 0'
                          }}>
                            <strong style={{ color: '#2c3e50' }}>Action:</strong> {q.counterStrategy.action}
                          </p>
                          
                          <div style={{ margin: '10px 0' }}>
                            <strong style={{ color: '#2c3e50' }}>Examples:</strong>
                            <ul style={{ 
                              margin: '8px 0 0 0',
                              paddingLeft: '20px',
                              color: '#444',
                              lineHeight: '1.6'
                            }}>
                              {q.counterStrategy.examples.map((example, i) => (
                                <li key={i} style={{ 
                                  marginBottom: '8px',
                                  position: 'relative',
                                  paddingLeft: '25px'
                                }}>
                                  <span style={{
                                    position: 'absolute',
                                    left: '0',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: '#3498db'
                                  }}>•</span>
                                  {example}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div>
                          <p style={{ 
                            color: '#444',
                            lineHeight: '1.6',
                            margin: '0 0 10px 0'
                          }}>
                            <strong style={{ color: '#2c3e50' }}>Psychology:</strong> {q.counterStrategy.psychology}
                          </p>
                          
                          <p style={{ 
                            marginTop: '10px',
                            fontStyle: 'italic',
                            color: '#2c3e50',
                            lineHeight: '1.6',
                            padding: '10px',
                            backgroundColor: 'rgba(255,255,255,0.5)',
                            borderRadius: '8px'
                          }}>
                            <strong>Power Move:</strong> {q.counterStrategy.powerMove}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div style={{ 
              marginTop: '30px',
              textAlign: 'center'
            }}>
              <Link to="/">
                <button style={{ 
                  padding: '15px 30px',
                  fontSize: '1.1rem',
                  backgroundColor: '#2c3e50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: '600',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  ':hover': {
                    backgroundColor: '#34495e',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 8px rgba(0,0,0,0.2)'
                  }
                }}>
                  Go Back Home
                </button>
              </Link>
            </div>
          </div>
      )}
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(var(--rotation)); }
            50% { transform: translateY(-20px) rotate(var(--rotation)); }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
          }
          
          @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          
          @keyframes spin {
            0% { transform: translateX(-50%) rotate(0deg); }
            100% { transform: translateX(-50%) rotate(360deg); }
          }
          
          @keyframes confetti {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
          }
          
          @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/quiz" element={<WebDetectorQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;