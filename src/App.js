import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function WelcomeScreen() {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Spider Web Decorations */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        opacity: 0.1
      }}>
        {/* Large Web 1 */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          animation: 'webFloat 8s ease-in-out infinite',
          transform: 'rotate(-15deg)'
        }}>
          <div className="spider-web" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            border: '2px solid rgba(44, 62, 80, 0.1)',
            borderRadius: '50%',
            animation: 'webPulse 4s ease-in-out infinite'
          }}></div>
          <div className="spider-web" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            width: '100%',
            height: '100%',
            border: '2px solid rgba(44, 62, 80, 0.1)',
            borderRadius: '50%'
          }}></div>
          <div className="spider-web" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(90deg)',
            width: '100%',
            height: '100%',
            border: '2px solid rgba(44, 62, 80, 0.1)',
            borderRadius: '50%'
          }}></div>
          <div className="spider-web" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(135deg)',
            width: '100%',
            height: '100%',
            border: '2px solid rgba(44, 62, 80, 0.1)',
            borderRadius: '50%'
          }}></div>
        </div>

        {/* Large Web 2 */}
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '150px',
          height: '150px',
          animation: 'webFloat 10s ease-in-out infinite',
          transform: 'rotate(15deg)'
        }}>
          <div className="spider-web" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            border: '2px solid rgba(44, 62, 80, 0.1)',
            borderRadius: '50%',
            animation: 'webPulse 5s ease-in-out infinite'
          }}></div>
          <div className="spider-web" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            width: '100%',
            height: '100%',
            border: '2px solid rgba(44, 62, 80, 0.1)',
            borderRadius: '50%'
          }}></div>
          <div className="spider-web" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(90deg)',
            width: '100%',
            height: '100%',
            border: '2px solid rgba(44, 62, 80, 0.1)',
            borderRadius: '50%'
          }}></div>
        </div>

        {/* Small Web 1 */}
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '20%',
          width: '100px',
          height: '100px',
          animation: 'webFloat 12s ease-in-out infinite',
          transform: 'rotate(-30deg)'
        }}>
          <div className="spider-web" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            border: '1px solid rgba(44, 62, 80, 0.1)',
            borderRadius: '50%',
            animation: 'webPulse 6s ease-in-out infinite'
          }}></div>
          <div className="spider-web" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            width: '100%',
            height: '100%',
            border: '1px solid rgba(44, 62, 80, 0.1)',
            borderRadius: '50%'
          }}></div>
        </div>

        {/* Small Web 2 */}
        <div style={{
          position: 'absolute',
          bottom: '30%',
          left: '20%',
          width: '80px',
          height: '80px',
          animation: 'webFloat 9s ease-in-out infinite',
          transform: 'rotate(30deg)'
        }}>
          <div className="spider-web" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            border: '1px solid rgba(44, 62, 80, 0.1)',
            borderRadius: '50%',
            animation: 'webPulse 7s ease-in-out infinite'
          }}></div>
          <div className="spider-web" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            width: '100%',
            height: '100%',
            border: '1px solid rgba(44, 62, 80, 0.1)',
            borderRadius: '50%'
          }}></div>
        </div>
      </div>

      <div style={{
        maxWidth: '600px',
        width: '100%',
        padding: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '30px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        animation: 'cloudFloat 8s ease-in-out infinite, fadeIn 1s ease-out',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        transform: 'translateY(0)',
        willChange: 'transform'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          color: '#2c3e50',
          marginBottom: '20px',
          fontWeight: '800',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          background: 'linear-gradient(45deg, #2c3e50, #3498db)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'slideDown 0.8s ease-out',
          letterSpacing: '1px',
          wordBreak: 'keep-all',
          whiteSpace: 'normal',
          overflowWrap: 'break-word',
          hyphens: 'none'
        }}>
          Welcome to Silk 🕸️
        </h1>
        
        <div style={{ 
          marginBottom: '40px',
          animation: 'fadeIn 1s ease-out 0.3s forwards',
          opacity: 0,
          maxWidth: '500px',
          margin: '0 auto 40px',
          padding: '0 20px',
          wordBreak: 'keep-all',
          whiteSpace: 'normal',
          overflowWrap: 'break-word',
          hyphens: 'none'
        }}>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: '#34495e',
            marginBottom: '20px',
            lineHeight: '1.6',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}>
            You're safe here. Let's begin cutting through the web of
          </p>
          
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: '#34495e',
            marginBottom: '20px',
            lineHeight: '1.6',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}>
            <span>🕷️</span>
            <span style={{ 
              color: '#2c3e50',
              fontWeight: '600'
            }}>Cognitive Fog</span>
          </p>
          
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: '#34495e',
            marginBottom: '20px',
            lineHeight: '1.6',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}>
            <span>💔</span>
            <span style={{ 
              color: '#2c3e50',
              fontWeight: '600'
            }}>Gaslight War</span>
          </p>
          
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: '#34495e',
            marginBottom: '20px',
            lineHeight: '1.6',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}>
            <span>📈</span>
            <span style={{ 
              color: '#2c3e50',
              fontWeight: '600'
            }}>Hustle Malware</span>
          </p>
        </div>
        
        <div style={{ 
          marginTop: '20px',
          animation: 'fadeIn 1s ease-out 0.6s forwards',
          opacity: 0
        }}>
          <Link to="/quiz">
            <button
              style={{
                padding: 'clamp(12px, 2vw, 18px) clamp(24px, 3vw, 36px)',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                cursor: 'pointer',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden',
                wordBreak: 'keep-all',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                margin: '0 auto',
                ':hover': {
                  backgroundColor: '#2980b9',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 8px rgba(0,0,0,0.2)'
                },
                ':before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transition: '0.5s'
                },
                ':hover:before': {
                  left: '100%'
                }
              }}
            >
              Begin Silking →
            </button>
          </Link>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(var(--rotation)); }
            50% { transform: translateY(-20px) rotate(var(--rotation)); }
          }
          
          @keyframes cloudFloat {
            0%, 100% { 
              transform: translateY(0) translateX(0) rotate(0deg); 
            }
            25% { 
              transform: translateY(-10px) translateX(5px) rotate(1deg); 
            }
            50% { 
              transform: translateY(0) translateX(0) rotate(0deg); 
            }
            75% { 
              transform: translateY(-10px) translateX(-5px) rotate(-1deg); 
            }
          }
          
          @keyframes webFloat {
            0%, 100% { 
              transform: translateY(0) rotate(var(--rotation)); 
            }
            50% { 
              transform: translateY(-15px) rotate(calc(var(--rotation) + 5deg)); 
            }
          }
          
          @keyframes webPulse {
            0%, 100% { 
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.1;
            }
            50% { 
              transform: translate(-50%, -50%) scale(1.1);
              opacity: 0.15;
            }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideDown {
            from { transform: translateY(-30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          @media (max-width: 480px) {
            .welcome-container {
              padding: 20px !important;
            }
            
            .welcome-title {
              font-size: 2rem !important;
              line-height: 1.2 !important;
            }
            
            .welcome-text {
              font-size: 1.1rem !important;
              line-height: 1.4 !important;
              padding: 0 10px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

function WebDetectorQuiz() {
  const [responses, setResponses] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [expandedRedFlags, setExpandedRedFlags] = useState({});
  const [expandedDetails, setExpandedDetails] = useState({});

  const toggleRedFlag = (idx) => {
    setExpandedRedFlags(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const toggleDetail = (redFlagIdx, detailType) => {
    setExpandedDetails(prev => ({
      ...prev,
      [`${redFlagIdx}-${detailType}`]: !prev[`${redFlagIdx}-${detailType}`]
    }));
  };

  // Add scroll to top effect
  useEffect(() => {
    if (submitted) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [submitted]);

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
      question: "Move fast—too fast emotionally or romantically?",
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
      question: "Make you doubt your memory or instincts?",
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
      question: "Isolate you from people you trust?",
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
      question: "Make you feel guilty for asserting your needs or saying no?",
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
      question: "Alternate between really kind and really cruel?",
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
      question: "Make you feel like you owe them something?",
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
      question: "Make you feel 'special' in a way that feels hard to leave?",
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
      question: "Feel like you're shrinking or silencing yourself around them?",
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
      question: "Punish you with silence or withdrawal when upset?",
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
      question: "Twist your words to make you sound unreasonable?",
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
      question: "Compare you to others to make you feel inadequate?",
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
      question: "Demand access to your phone/social media?",
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
      question: "Blame you for their reactions?",
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
      question: "Sabotage your achievements or milestones?",
      tactic: "Success Sabotage",
      howItWorks: "Undermines your joy (e.g., ghosting you on your birthday) to keep you small.",
      redFlags: [
        "They \"forget\" important events.",
        "They dismiss your accomplishments (\"Big deal\").",
        "They create drama during your special moments"
      ],
      longTermEffect: "Internalized shame for wanting recognition.",
      emotionalImpact: "You start doubting whether your achievements are worth celebrating. Their dismissive or sabotating behavior makes you feel guilty for wanting recognition. Over time, you might stop sharing your successes or even downplay them to avoid their negative reactions. Your joy becomes tainted with anxiety about how they'll respond.",
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
      question: "Insist they \"know you better than you know yourself\"?",
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
      question: "Use gifts/acts of service to manipulate you later?",
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
      question: "Pressure you to forgive them instantly?",
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
      question: "Frame their demands as \"tests\" of your love?",
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
    },
    {
      question: "Deny your reality or make you question your memory?",
      tactic: "Gaslighting in Tech",
      howItWorks: "A founder or manager denies facts, memories, or feelings you know to be true, undermining your confidence in your perceptions. They might say 'I never said that' or 'You're overreacting' to make you doubt your reality.",
      redFlags: [
        "They harshly criticize you in a meeting, then later insist 'I never singled you out'",
        "They promise equity in casual conversation and later deny it",
        "You find yourself constantly apologizing for 'misremembering'",
        "You start keeping records to prove your sanity"
      ],
      longTermEffect: "Erodes your ability to trust your own judgment and memory",
      emotionalImpact: "You feel confused, anxious, and isolated. You start doubting your memory and perceptions, constantly second-guessing yourself. The stress of trying to prove your reality can be exhausting and demoralizing.",
      metaphor: "It's like being in a hall of distorted mirrors – your sense of reality warps as reflections of the truth are twisted. Someone keeps stealthily rearranging the furniture in your mind and then claims you moved it.",
      counterStrategy: {
        name: "The Receipts Method",
        action: "Document all important interactions and decisions",
        examples: [
          "Keep email records and meeting notes",
          "When they deny reality: 'I have it in writing from our last meeting'",
          "If they gaslight: 'Let me check my notes from that conversation'"
        ],
        psychology: "Removes their power to distort facts by having concrete evidence",
        powerMove: "I don't debate reality. Here's the proof."
      }
    },
    {
      question: "Use guilt to pressure you into working more?",
      tactic: "Guilt-Tripping in Startups",
      howItWorks: "They make you feel guilty so you'll do what they want, playing on your sense of obligation. Instead of directly asking, they induce guilt to influence your behavior.",
      redFlags: [
        "'We've all been working weekends – are you going to leave us hanging?'",
        "'After all I've done for you, I can't believe you won't do this'",
        "They invoke 'team family' to make you feel bad for setting boundaries",
        "You feel indebted and obligated to work extra hours"
      ],
      longTermEffect: "Chronic guilt leads to burnout and resentment",
      emotionalImpact: "You feel shame and responsibility, constantly trying to 'repay' an ever-growing favor bank. Your boundaries erode as you work harder to avoid feeling like you've failed someone.",
      metaphor: "It's like carrying an invisible debt – the manipulator keeps adding to your 'ledger' of obligations. You're made to feel you must repay favors that were never truly agreed upon.",
      counterStrategy: {
        name: "The Ledger Reset",
        action: "Reject unrequested favors and obligations",
        examples: [
          "When they guilt-trip: 'I didn't ask for this, so there's no debt'",
          "If they keep score: 'Gifts with strings aren't gifts'",
          "Set clear boundaries: 'My time off is non-negotiable'"
        ],
        psychology: "Reframes their 'generosity' as the control tactic it is",
        powerMove: "I'm not an investment. Stop keeping score."
      }
    },
    {
      question: "Shower you with praise then suddenly withdraw it?",
      tactic: "Love-Bombing in Tech",
      howItWorks: "They overwhelm you with praise and promises to gain your trust, then pull back once you're invested. This creates a rush of validation that lowers your guard.",
      redFlags: [
        "Excessive praise during interviews or first weeks",
        "Grand promises about your future role",
        "Sudden coldness after you've accepted the job",
        "Investors who love-bomb then become hyper-critical after signing"
      ],
      longTermEffect: "Creates dependency on their approval and validation",
      emotionalImpact: "Initially you feel elated and valued, but the abrupt withdrawal leaves you confused and anxious. You work extra hard to regain their favor, eroding your self-esteem.",
      metaphor: "It's like a sugar rush followed by a crash – the sweetness was conditional. Or a mirage in the desert: an illusion of endless praise that vanishes when you reach for it.",
      counterStrategy: {
        name: "The Reality Check",
        action: "Maintain perspective and document promises",
        examples: [
          "Get all promises in writing",
          "When they withdraw: 'This doesn't match what we discussed'",
          "If they love-bomb: 'Let's focus on concrete deliverables'"
        ],
        psychology: "Keeps the relationship professional and accountable",
        powerMove: "I value consistency over compliments."
      }
    },
    {
      question: "Use fear or threats to control you?",
      tactic: "Threats and Intimidation",
      howItWorks: "They use fear to control behavior, either through explicit threats or subtle hints of negative consequences. This exploits power imbalances and survival instincts.",
      redFlags: [
        "'If you can't meet these numbers, I don't know how secure your position will be'",
        "Towering over you in anger or slamming doors",
        "Public criticism in all-hands meetings",
        "Threats to pull funding or replace you"
      ],
      longTermEffect: "Creates a culture of fear and anxiety",
      emotionalImpact: "You feel trapped, unsafe, and constantly on edge. You become hyper-vigilant, overworking to avoid being a target, or withdrawn to stay 'under the radar'.",
      metaphor: "It's like having a sword dangling over your head at work – one wrong move and it could drop. Or living with a wolf at the door: always alert, knowing dissent might provoke an attack.",
      counterStrategy: {
        name: "The Fear Disarmament",
        action: "Document threats and maintain professional boundaries",
        examples: [
          "Record threatening statements",
          "When they intimidate: 'I'll need that in writing'",
          "If they threaten: 'Let's discuss this with HR present'"
        ],
        psychology: "Removes the power of fear by making threats visible and accountable",
        powerMove: "I don't respond to threats. Let's have a professional discussion."
      }
    },
    {
      question: "Pressure you to conform to group decisions?",
      tactic: "Peer Pressure and Groupthink",
      howItWorks: "They exploit the natural human desire to fit in by implying 'everyone else' agrees or is doing something, so you should too. This suppresses dissenting opinions.",
      redFlags: [
        "'This is just how startup life is – all of us are pulling 80-hour weeks'",
        "'All of us are on board with this plan, why aren't you?'",
        "Lack of debate in meetings",
        "Social ostracism for having different work habits"
      ],
      longTermEffect: "Stifles innovation and critical thinking",
      emotionalImpact: "You feel isolated or defective for thinking differently. You experience anxiety about being judged or left out. Over time, you doubt your own ideas and values.",
      metaphor: "It's like being the only domino trying not to fall – the force of all the others can knock you down anyway. Or swimming against a strong current in a river.",
      counterStrategy: {
        name: "The Independent Voice",
        action: "Maintain your perspective and document dissenting views",
        examples: [
          "When pressured: 'I have a different perspective to share'",
          "If ostracized: 'Diversity of thought strengthens teams'",
          "Document your concerns in writing"
        ],
        psychology: "Values individual contribution over group conformity",
        powerMove: "I contribute more by thinking independently."
      }
    },
    {
      question: "Create false urgency to pressure you?",
      tactic: "False Urgency and Overwork Culture",
      howItWorks: "They frame everything as critical to prevent scrutiny and induce panic-driven compliance. This ties into hustle culture, pushing people to ignore their limits.",
      redFlags: [
        "'If we don't get this feature out this week, the company could die'",
        "Unrealistic deadlines for every project",
        "Glorification of sleeping at the office",
        "Implicit requirement to always be online"
      ],
      longTermEffect: "Leads to chronic stress and burnout",
      emotionalImpact: "You feel exhausted yet guilty for not doing more. Personal boundaries erode as you skip meals, cut sleep, and sacrifice weekends. Anxiety and fatigue diminish your creativity.",
      metaphor: "It's like a fire alarm ringing all day – you're running on adrenaline and fear, unable to distinguish real fires from false alarms. Or a hamster on a wheel, sprinting frantically but never getting anywhere healthier.",
      counterStrategy: {
        name: "The Reality Check",
        action: "Set and maintain healthy boundaries",
        examples: [
          "When pressured: 'Let's assess what's truly urgent'",
          "If overworked: 'I need to maintain sustainable hours'",
          "Document your work-life balance needs"
        ],
        psychology: "Prioritizes sustainable productivity over panic-driven work",
        powerMove: "I work best with realistic deadlines and proper rest."
      }
    },
    {
      question: "Dangle rewards that never materialize?",
      tactic: "Carrot-and-Stick Promises",
      howItWorks: "They alternate between promised rewards and implied negative outcomes to influence behavior. The 'carrot' is always just out of reach, while the 'stick' is the implied punishment.",
      redFlags: [
        "'If you put in extra hours this quarter, you'll get a big bonus next review'",
        "Promises of raises or equity that never materialize",
        "'Close this deal and we all get a well-deserved break'",
        "Moving goalposts for promised rewards"
      ],
      longTermEffect: "Creates disillusionment and cynicism",
      emotionalImpact: "Initially you feel motivated and hopeful, but repeated let-downs leave you disillusioned and used. You feel foolish for believing promises, which hurts your self-esteem.",
      metaphor: "It's like a donkey with a carrot dangled in front of its nose – no matter how fast it walks, the carrot stays out of reach. Or being in a casino of workplace rewards: you keep investing effort like coins into a slot machine that rarely pays out.",
      counterStrategy: {
        name: "The Promise Protection",
        action: "Get all promises in writing and set clear expectations",
        examples: [
          "When promised rewards: 'Let's document that in writing'",
          "If goals shift: 'I need clarity on the new requirements'",
          "Track all promised benefits and timelines"
        ],
        psychology: "Makes promises concrete and accountable",
        powerMove: "I need commitments in writing to plan effectively."
      }
    },
    {
      question: "Keep you in the dark about important information?",
      tactic: "Gatekeeping Information",
      howItWorks: "They control access to information or resources to maintain power. By keeping you partially informed or excluding you from key discussions, they ensure you remain dependent.",
      redFlags: [
        "Withholding crucial documentation or insights",
        "Not inviting you to important strategy meetings",
        "'Need-to-know basis' misuse",
        "Selective sharing of information with different team members"
      ],
      longTermEffect: "Creates information asymmetry and dependency",
      emotionalImpact: "You feel powerless and frustrated. You sense something is off but can't pinpoint it, leading to anxiety and self-doubt. It's isolating and erodes your confidence in the organization.",
      metaphor: "It's like trying to drive at night with one headlight – your manipulator has the high beams on while you're straining to navigate with limited visibility. Or a locked door in the flow of communication.",
      counterStrategy: {
        name: "The Information Audit",
        action: "Proactively seek information and document gaps",
        examples: [
          "When excluded: 'I need to be included in these discussions'",
          "If information is withheld: 'I require this information to do my job'",
          "Document instances of information gatekeeping"
        ],
        psychology: "Reclaims your right to necessary information",
        powerMove: "Transparency is essential for effective work."
      }
    },
    {
      question: "Take credit for your work or shift blame to you?",
      tactic: "Credit Stealing & Blame Shifting",
      howItWorks: "They take undue praise for your work while casting responsibility for mistakes onto you. This protects their ego at your expense and rewrites the narrative of events.",
      redFlags: [
        "Presenting your work as their idea",
        "Using 'we' for successes but 'you' for failures",
        "Blaming you for problems they caused",
        "Taking credit for team achievements"
      ],
      longTermEffect: "Erodes trust and team morale",
      emotionalImpact: "You feel angry, humiliated, and demoralized. Your contributions feel erased or misappropriated. You might overwork to prove yourself or become afraid to take risks.",
      metaphor: "It's like playing hot potato with praise and blame – they grab all the cool potatoes (credit) and toss every hot one (blame) at you. Or building a sandcastle only for someone to stick their flag on it.",
      counterStrategy: {
        name: "The Credit Protection",
        action: "Document your contributions and call out misattribution",
        examples: [
          "When credit is stolen: 'I led that project and would like recognition'",
          "If blamed: 'Let's review the timeline of events'",
          "Keep records of your contributions"
        ],
        psychology: "Ensures proper attribution and accountability",
        powerMove: "I deserve credit for my work and won't accept undue blame."
      }
    },
    {
      question: "Control every detail of your work?",
      tactic: "Micromanagement",
      howItWorks: "They monitor and dictate every small detail of your work, not trusting others and ensuring they maintain control. This chips away at your autonomy and confidence.",
      redFlags: [
        "Reviewing every line of code or document",
        "Requiring approval for minor decisions",
        "Tracking your online status obsessively",
        "Nitpicking minor issues in one-on-ones"
      ],
      longTermEffect: "Stifles initiative and growth",
      emotionalImpact: "You feel stifled, inadequate, and anxious. You experience learned helplessness, stop taking initiative, and your stress levels remain high. It's humiliating and demotivating.",
      metaphor: "It's like trying to paint with someone's hand clamped over yours, directing each stroke. Or being on a short leash – you can only move as far as it allows.",
      counterStrategy: {
        name: "The Autonomy Assertion",
        action: "Set boundaries and demonstrate competence",
        examples: [
          "When micromanaged: 'I need space to do my job effectively'",
          "If over-controlled: 'Let's agree on checkpoints instead of constant oversight'",
          "Document your successful independent work"
        ],
        psychology: "Reclaims professional autonomy and trust",
        powerMove: "I was hired for my expertise. Let me use it."
      }
    },
    {
      question: "Play team members against each other?",
      tactic: "Divide and Conquer",
      howItWorks: "They create divisions between people to maintain control, often using triangulation – involving a third party to mediate or carry messages rather than addressing issues directly.",
      redFlags: [
        "'A lot of the team agrees you need to improve'",
        "Complaining about someone to others but not directly",
        "Speaking ill of one founder to employees or investors",
        "Controlling the narrative separately to different people"
      ],
      longTermEffect: "Creates a toxic, distrustful environment",
      emotionalImpact: "You feel paranoid and confused about who to trust. It breeds distrust among team members and makes collaboration difficult. You feel like a pawn in someone's game.",
      metaphor: "It's like a puppet master pulling strings from above so that the puppets clash. Or planting weeds in a garden – rumors and grudges sprout between team members.",
      counterStrategy: {
        name: "The Direct Communication",
        action: "Insist on transparent, direct communication",
        examples: [
          "When triangulated: 'Let's discuss this directly'",
          "If divided: 'I prefer to hear feedback directly from the source'",
          "Document attempts to create division"
        ],
        psychology: "Removes the power of indirect manipulation",
        powerMove: "I communicate directly, not through intermediaries."
      }
    },
    {
      question: "Dismiss real issues with forced positivity?",
      tactic: "Toxic Positivity",
      howItWorks: "They insist on being positive to an unhealthy degree, rejecting or shaming negative emotions or valid concerns. This silences dissent and avoids addressing real issues.",
      redFlags: [
        "'Let's not focus on the negative' when raising concerns",
        "'We just need a can-do attitude, no negativity'",
        "Only wanting to hear solutions, not problems",
        "Public shout-outs but no space for struggles"
      ],
      longTermEffect: "Problems fester and grow worse",
      emotionalImpact: "You feel guilty or ashamed for having normal negative feelings. You feel invalidated, unheard, and emotionally disconnected. Problems fester internally because they're never addressed.",
      metaphor: "It's like putting a fresh coat of paint over a moldy wall – it looks cheerful briefly, but the rot is still spreading. Or wearing rose-colored glasses in a burning building.",
      counterStrategy: {
        name: "The Reality Validation",
        action: "Insist on addressing real issues",
        examples: [
          "When dismissed: 'This issue needs to be addressed, not ignored'",
          "If positivity is forced: 'We need to discuss both challenges and opportunities'",
          "Document concerns that are being dismissed"
        ],
        psychology: "Validates the importance of addressing real problems",
        powerMove: "I value honest discussion over forced positivity."
      }
    },
    {
      question: "Treat the person above like an infallible hero?",
      tactic: "Cult of Personality",
      howItWorks: "The leader is elevated to near-hero status, and their persona dominates the company's culture. Questioning them feels like heresy, and their flaws are excused as 'just what brilliant founders are like'.",
      redFlags: [
        "'[CEO Name] knows best – they built this company'",
        "Dissenting opinions get squashed with 'Trust the vision'",
        "Long hours justified by 'mission'",
        "Any internal problem downplayed in light of founder's star power"
      ],
      longTermEffect: "Creates a culture of blind obedience",
      emotionalImpact: "You feel conflicted and suppressed. You fear speaking up or being honest. You experience cognitive dissonance as you see issues but everyone else is praising the leader.",
      metaphor: "It's like being in the orbit of a sun – the founder's persona is the sun, and everyone else just revolves around them. The light is warm if you're aligned, but if you drift out of orbit, you're cast into darkness.",
      counterStrategy: {
        name: "The Critical Thinking",
        action: "Maintain independent judgment",
        examples: [
          "When hero-worshiped: 'Let's evaluate this based on facts'",
          "If dissent is squashed: 'Healthy organizations welcome diverse perspectives'",
          "Document instances of uncritical praise"
        ],
        psychology: "Values rational evaluation over personality cult",
        powerMove: "I think independently, not through any leader's lens."
      }
    },
    {
      question: "Undermine you with backhanded compliments?",
      tactic: "Negging and Undermining",
      howItWorks: "They use sarcasm, teasing, or 'just joking' remarks that carry an insult. This allows them to put you down while maintaining plausible deniability.",
      redFlags: [
        "'I'm impressed you got that working... didn't expect you to pull it off'",
        "'Good presentation – surprisingly coherent coming from the quiet one'",
        "Snarky comments about your work",
        "Jokes that are repeatedly at your expense"
      ],
      longTermEffect: "Erodes confidence and self-esteem",
      emotionalImpact: "You laugh along to not seem sensitive, but inside it stings. You start second-guessing yourself. The confusion makes it hard to call out the behavior, so you internalize it.",
      metaphor: "It's like getting a chocolate with a razor blade inside – it looks sweet, but it cuts you unexpectedly. Or 'death by a thousand cuts': each little joke is a tiny cut that adds up to real harm.",
      counterStrategy: {
        name: "The Direct Confrontation",
        action: "Call out undermining behavior directly",
        examples: [
          "When negged: 'That comment felt like a backhanded compliment'",
          "If undermined: 'I prefer direct feedback to sarcasm'",
          "Document patterns of undermining behavior"
        ],
        psychology: "Removes the power of passive-aggressive comments",
        powerMove: "I respond to direct communication, not veiled insults."
      }
    },
    {
      question: "Exploit your self-doubt by comparing you to others?",
      tactic: "Exploiting Imposter Syndrome",
      howItWorks: "They leverage your inner critic by constantly comparing you to others or highlighting how you stack up unfavorably against peers. This makes you more pliable through feelings of inadequacy.",
      redFlags: [
        "'The new hire already fixed that bug you struggled with'",
        "'Be more like Alice; she delivered X, Y, Z'",
        "Glorifying competitors to make you feel inadequate",
        "Using credentials to undermine your confidence"
      ],
      longTermEffect: "Creates chronic insecurity and stress",
      emotionalImpact: "You feel never good enough, constantly comparing yourself to others. You overwork to try to measure up, leading to burnout. Every achievement feels diminished.",
      metaphor: "It's like running on a treadmill that someone else controls – no matter how fast you go, they keep dialing it up. Or trying to fill a bottomless bucket: each accomplishment disappears.",
      counterStrategy: {
        name: "The Self-Validation",
        action: "Focus on your own growth and achievements",
        examples: [
          "When compared: 'I measure my progress against my own goals'",
          "If undermined: 'My value isn't determined by comparison'",
          "Keep a record of your achievements"
        ],
        psychology: "Builds internal validation over external comparison",
        powerMove: "I define my success on my own terms."
      }
    },
    {
      question: "Blur professional boundaries by calling the company 'family'?",
      tactic: "Boundary-Blurring Guilt",
      howItWorks: "They equate the company to a 'family' to create a sense of obligation and loyalty. This emotionalizes the workplace and can guilt you into tolerating or doing things you normally wouldn't.",
      redFlags: [
        "'We're all one big family, so we trust you'll do what's needed'",
        "Guilt about setting boundaries like 'But we're family'",
        "'Join our family' during hiring",
        "Using family rhetoric to justify unpaid overtime"
      ],
      longTermEffect: "Creates unhealthy emotional dependence",
      emotionalImpact: "You feel guilty, dutiful, and pressured. It's hard to say no or prioritize your well-being. You might overwork 'for the family' even when it's hurting you.",
      metaphor: "It's like being in a found family narrative with fine print – your 'family' ties will be used to ask extra from you. Or golden handcuffs, but emotional instead of financial.",
      counterStrategy: {
        name: "The Professional Boundaries",
        action: "Maintain clear work-life separation",
        examples: [
          "When family is invoked: 'I value professional boundaries'",
          "If guilt-tripped: 'My personal time is non-negotiable'",
          "Document attempts to blur boundaries"
        ],
        psychology: "Maintains healthy work-life separation",
        powerMove: "I maintain professional boundaries for sustainable work."
      }
    },
    {
      question: "Alternate between supportive and critical behavior?",
      tactic: "Hot-and-Cold Behavior",
      howItWorks: "They alternate between positive and negative treatment unpredictably – one day supportive, the next day critical or distant. This creates strong attachment through intermittent reinforcement.",
      redFlags: [
        "Lavish praise followed by harsh criticism",
        "Sudden withdrawal of support without explanation",
        "Mixed messages about your performance",
        "Unpredictable responses to your work"
      ],
      longTermEffect: "Creates emotional dependency and anxiety",
      emotionalImpact: "You feel emotionally exhausted, constantly evaluating your last interaction. You become dependent on their occasional positive moments, which feel good by contrast to the negative ones.",
      metaphor: "It's like a roller coaster – exhilarating highs followed by stomach-churning drops. Or chasing the sun on a partly cloudy day: sometimes it shines warm, then disappears, leaving you cold.",
      counterStrategy: {
        name: "The Emotional Stability",
        action: "Maintain consistent standards and boundaries",
        examples: [
          "When behavior shifts: 'I need consistent feedback'",
          "If support withdraws: 'Let's establish clear expectations'",
          "Document patterns of inconsistent behavior"
        ],
        psychology: "Values stability over emotional manipulation",
        powerMove: "I respond to consistent, professional behavior."
      }
    },
    {
      question: "Use silence or exclusion as punishment?",
      tactic: "Silent Treatment and Exclusion",
      howItWorks: "They refuse to communicate or acknowledge you as a way to punish or control. This plays on our discomfort with social rejection and creates a power dynamic where they decide when you're 'worthy' of interaction.",
      redFlags: [
        "Suddenly stopping responses to your messages",
        "Excluding you from team huddles or social events",
        "Canceling one-on-one meetings without explanation",
        "Talking to others while ignoring you"
      ],
      longTermEffect: "Creates isolation and anxiety",
      emotionalImpact: "You feel distressed, confused, and panicked. You might apologize or capitulate just to end the discomfort. Prolonged exclusion leads to loneliness and depression.",
      metaphor: "It's like being sent to Siberia in the middle of a lively city – physically present but socially isolated. Or a wall of ice between you and the person: you can see them carrying on, but any attempt to connect is met with silence.",
      counterStrategy: {
        name: "The Communication Insistence",
        action: "Demand professional communication",
        examples: [
          "When ignored: 'I need clear communication to do my job'",
          "If excluded: 'I should be included in relevant discussions'",
          "Document instances of exclusion"
        ],
        psychology: "Maintains professional standards of communication",
        powerMove: "I require professional communication to be effective."
      }
    }
  ];

  const score = responses.filter(Boolean).length;
  const flaggedQuestions = questions.filter((_, index) => responses[index]);

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: 'clamp(10px, 3vw, 20px)',
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
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          transform: 'rotate(-15deg)',
          animation: 'float 4s ease-in-out infinite'
        }}>🚩</div>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          transform: 'rotate(15deg)',
          animation: 'float 5s ease-in-out infinite'
        }}>⚠️</div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '15%',
          fontSize: 'clamp(2.2rem, 5.5vw, 3.5rem)',
          transform: 'rotate(-10deg)',
          animation: 'float 4.5s ease-in-out infinite'
        }}>🔍</div>
        <div style={{
          position: 'absolute',
          bottom: '25%',
          right: '5%',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          transform: 'rotate(20deg)',
          animation: 'float 5.5s ease-in-out infinite'
        }}>🎯</div>
      </div>

      {/* Progress indicator */}
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        left: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 'clamp(6px, 2vw, 8px) clamp(10px, 3vw, 15px)',
        borderRadius: '20px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        zIndex: 1000,
        animation: 'pulse 2s infinite',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '300px',
        margin: '0 auto'
      }}>
        <span style={{ 
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          fontWeight: '600',
          color: '#2c3e50',
          textAlign: 'center'
        }}>
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
        margin: 'clamp(40px, 8vw, 60px) auto 20px',
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '20px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        padding: 'clamp(15px, 3vw, 20px)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(20px, 4vw, 30px)',
          padding: 'clamp(15px, 3vw, 20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '15px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: '#2c3e50',
            marginBottom: 'clamp(10px, 2vw, 15px)',
            fontWeight: '800',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            letterSpacing: '0.5px',
            background: 'linear-gradient(45deg, #2c3e50, #3498db)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.3'
          }}>
            You Are Stuck in the Web of Manipulation...
            How Did You Get Stuck?
          </h2>
          
          <p style={{ 
            fontSize: 'clamp(0.9rem, 2vw, 1.4rem)',
            color: '#34495e',
            marginBottom: '0',
            fontStyle: 'italic',
            lineHeight: '1.6',
            fontWeight: '500',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 clamp(10px, 2vw, 20px)'
          }}>
            Click on the red flags you've noticed in your situation. Be honest with yourself.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ maxWidth: '100%', margin: '0 auto' }}>
            <div style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: 'clamp(15px, 3vw, 20px)',
              borderRadius: '15px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              minHeight: '500px',
              position: 'relative'
            }}>
              <p style={{ 
                fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
                color: '#34495e',
                marginBottom: 'clamp(15px, 3vw, 20px)',
                textAlign: 'center',
                lineHeight: '1.6',
                fontWeight: '500'
              }}>
                Did The Sus Individual(s)
              </p>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'clamp(10px, 2vw, 15px)',
                padding: 'clamp(5px, 1.5vw, 10px)'
              }}>
                {questions.map((q, idx) => {
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
                        padding: 'clamp(15px, 3vw, 20px)',
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
                        fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                        backgroundColor: responses[idx] ? '#e74c3c' : '#95a5a6',
                        color: 'white',
                        width: 'clamp(25px, 5vw, 30px)',
                        height: 'clamp(25px, 5vw, 30px)',
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
                        fontSize: 'clamp(0.8rem, 2vw, 1.2rem)',
                        color: '#34495e',
                        lineHeight: '1.6',
                        marginTop: 'clamp(10px, 2vw, 15px)',
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
                marginTop: 'clamp(15px, 3vw, 20px)'
              }}>
                <button 
                  type="submit" 
                  style={{ 
                    padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 25px)',
                    fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
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
            {/* Results Header */}
            <div style={{
              textAlign: 'center',
              marginBottom: 'clamp(20px, 4vw, 30px)',
              padding: 'clamp(15px, 3vw, 20px)',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '15px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              animation: 'slideDown 0.5s ease-out'
            }}>
              <h3 style={{ 
                fontSize: 'clamp(1.2rem, 3vw, 2.2rem)',
                color: '#2c3e50',
                marginBottom: 'clamp(10px, 2vw, 15px)',
                fontWeight: '800',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                letterSpacing: '0.5px',
                background: 'linear-gradient(45deg, #2c3e50, #3498db)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1.3'
              }}>
                Your Results
              </h3>
            </div>
            
            {/* Score Summary */}
            <div style={{ 
              marginBottom: 'clamp(15px, 3vw, 20px)',
              padding: 'clamp(15px, 3vw, 20px)',
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
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                marginBottom: 'clamp(10px, 2vw, 15px)',
                color: '#2c3e50',
                fontWeight: '600',
                textAlign: 'center'
              }}>
                You identified <span style={{ 
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                  fontWeight: '800',
                  color: '#e74c3c'
                }}>{score}</span> out of {questions.length} red flags
              </p>
              
              {score === 0 && (
                <div style={{ 
                  padding: 'clamp(10px, 2vw, 15px)',
                  backgroundColor: '#e6ffe6',
                  borderRadius: '10px',
                  animation: 'pulse 2s infinite'
                }}>
                  <p style={{ margin: '0', color: '#27ae60', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', textAlign: 'center' }}>
                    🎉 Great job! You're probably safe in this situation. But keep trusting your instincts!
                  </p>
                </div>
              )}
              
              {score >= 1 && score <= 2 && (
                <div style={{ 
                  padding: 'clamp(10px, 2vw, 15px)',
                  backgroundColor: '#fff3e6',
                  borderRadius: '10px',
                  animation: 'pulse 2s infinite'
                }}>
                  <p style={{ margin: '0', color: '#d35400', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', textAlign: 'center' }}>
                    ⚠️ There may be mild manipulation patterns. Stay aware and keep your boundaries strong!
                  </p>
                </div>
              )}
              
              {score >= 3 && score <= 4 && (
                <div style={{ 
                  padding: 'clamp(10px, 2vw, 15px)',
                  backgroundColor: '#ffe6e6',
                  borderRadius: '10px',
                  animation: 'pulse 2s infinite'
                }}>
                  <p style={{ margin: '0', color: '#c0392b', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', textAlign: 'center' }}>
                    🚨 You're likely experiencing manipulative behavior. Trust your gut and set clear boundaries!
                  </p>
                </div>
              )}
              
              {score >= 5 && (
                <div style={{ 
                  padding: 'clamp(10px, 2vw, 15px)',
                  backgroundColor: '#ffcccc',
                  borderRadius: '10px',
                  animation: 'pulse 2s infinite'
                }}>
                  <p style={{ margin: '0', color: '#7f0000', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', textAlign: 'center' }}>
                    🔥 This shows strong signs of emotional manipulation. You deserve safety and clarity. Reach out for support!
                  </p>
                </div>
              )}
            </div>

            {/* Red Flag Details */}
            {flaggedQuestions.length > 0 && (
              <div style={{ marginTop: 'clamp(15px, 3vw, 20px)' }}>
                <div style={{
                  textAlign: 'center',
                  marginBottom: 'clamp(20px, 4vw, 30px)',
                  padding: 'clamp(10px, 2vw, 15px)',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  animation: 'slideUp 0.5s ease-out'
                }}>
                  <h4 style={{ 
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
                    color: '#2c3e50',
                    marginBottom: 'clamp(10px, 2vw, 15px)',
                    fontWeight: '800',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                    letterSpacing: '0.5px',
                    background: 'linear-gradient(45deg, #2c3e50, #3498db)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: '1.3'
                  }}>
                    Details About the Red Flags You Identified
                  </h4>
                </div>
                
                {flaggedQuestions.map((q, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      marginBottom: 'clamp(15px, 3vw, 20px)', 
                      padding: 'clamp(15px, 3vw, 20px)', 
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
                    <div 
                      onClick={() => toggleRedFlag(idx)}
                      style={{ 
                        cursor: 'pointer',
                        padding: 'clamp(10px, 2vw, 15px)',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '10px',
                        borderLeft: '4px solid #e74c3c',
                        transition: 'all 0.3s ease',
                        ':hover': {
                          backgroundColor: '#fff5f5'
                        }
                      }}
                    >
                      <h5 style={{ 
                        color: '#2c3e50',
                        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                        marginBottom: 'clamp(10px, 2vw, 15px)',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(5px, 1.5vw, 10px)'
                      }}>
                        <span>🚩</span> {q.question}
                        <span style={{ marginLeft: 'auto' }}>
                          {expandedRedFlags[idx] ? '▼' : '▶'}
                        </span>
                      </h5>
                    </div>

                    {expandedRedFlags[idx] && (
                      <div style={{ marginTop: 'clamp(15px, 3vw, 20px)' }}>
                        <h6 style={{ 
                          color: '#e74c3c',
                          fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                          marginBottom: 'clamp(10px, 2vw, 15px)',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'clamp(5px, 1.5vw, 10px)'
                        }}>
                          <span>🎯</span> {q.tactic}
                        </h6>

                        <div style={{ 
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                          gap: 'clamp(15px, 3vw, 20px)'
                        }}>
                          <div 
                            onClick={() => toggleDetail(idx, 'howItWorks')}
                            style={{ 
                              padding: 'clamp(10px, 2vw, 15px)',
                              backgroundColor: '#f8f9fa',
                              borderRadius: '10px',
                              borderLeft: '4px solid #3498db',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              ':hover': {
                                backgroundColor: '#f0f7ff'
                              }
                            }}
                          >
                            <h6 style={{ 
                              color: '#2c3e50',
                              fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
                              marginBottom: 'clamp(8px, 1.5vw, 10px)',
                              fontWeight: '600',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 'clamp(5px, 1.5vw, 10px)'
                            }}>
                              <span>🔍</span> How It Works
                              <span style={{ marginLeft: 'auto' }}>
                                {expandedDetails[`${idx}-howItWorks`] ? '▼' : '▶'}
                              </span>
                            </h6>
                            {expandedDetails[`${idx}-howItWorks`] && (
                              <p style={{ 
                                color: '#444',
                                lineHeight: '1.6',
                                margin: '0',
                                fontSize: 'clamp(0.85rem, 1.8vw, 1rem)'
                              }}>
                                {q.howItWorks}
                              </p>
                            )}
                          </div>

                          <div 
                            onClick={() => toggleDetail(idx, 'redFlags')}
                            style={{ 
                              padding: 'clamp(10px, 2vw, 15px)',
                              backgroundColor: '#f8f9fa',
                              borderRadius: '10px',
                              borderLeft: '4px solid #e74c3c',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              ':hover': {
                                backgroundColor: '#fff5f5'
                              }
                            }}
                          >
                            <h6 style={{ 
                              color: '#2c3e50',
                              fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
                              marginBottom: 'clamp(8px, 1.5vw, 10px)',
                              fontWeight: '600',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 'clamp(5px, 1.5vw, 10px)'
                            }}>
                              <span>🚩</span> Red Flags
                              <span style={{ marginLeft: 'auto' }}>
                                {expandedDetails[`${idx}-redFlags`] ? '▼' : '▶'}
                              </span>
                            </h6>
                            {expandedDetails[`${idx}-redFlags`] && (
                              <ul style={{ 
                                margin: '0',
                                paddingLeft: 'clamp(15px, 3vw, 20px)',
                                color: '#444',
                                lineHeight: '1.6',
                                fontSize: 'clamp(0.85rem, 1.8vw, 1rem)'
                              }}>
                                {q.redFlags.map((flag, i) => (
                                  <li key={i} style={{ 
                                    marginBottom: 'clamp(5px, 1.5vw, 8px)',
                                    position: 'relative',
                                    paddingLeft: 'clamp(20px, 4vw, 25px)'
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
                            )}
                          </div>

                          <div 
                            onClick={() => toggleDetail(idx, 'emotionalImpact')}
                            style={{ 
                              padding: 'clamp(10px, 2vw, 15px)',
                              backgroundColor: '#f8f9fa',
                              borderRadius: '10px',
                              borderLeft: '4px solid #f39c12',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              ':hover': {
                                backgroundColor: '#fff9e6'
                              }
                            }}
                          >
                            <h6 style={{ 
                              color: '#2c3e50',
                              fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
                              marginBottom: 'clamp(8px, 1.5vw, 10px)',
                              fontWeight: '600',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 'clamp(5px, 1.5vw, 10px)'
                            }}>
                              <span>💭</span> Emotional Impact
                              <span style={{ marginLeft: 'auto' }}>
                                {expandedDetails[`${idx}-emotionalImpact`] ? '▼' : '▶'}
                              </span>
                            </h6>
                            {expandedDetails[`${idx}-emotionalImpact`] && (
                              <p style={{ 
                                color: '#7f4c00',
                                lineHeight: '1.6',
                                margin: '0',
                                fontSize: 'clamp(0.85rem, 1.8vw, 1rem)'
                              }}>
                                {q.emotionalImpact}
                              </p>
                            )}
                          </div>

                          <div 
                            onClick={() => toggleDetail(idx, 'metaphor')}
                            style={{ 
                              padding: 'clamp(10px, 2vw, 15px)',
                              backgroundColor: '#f8f9fa',
                              borderRadius: '10px',
                              borderLeft: '4px solid #8e44ad',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              ':hover': {
                                backgroundColor: '#f9f0ff'
                              }
                            }}
                          >
                            <h6 style={{ 
                              color: '#2c3e50',
                              fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
                              marginBottom: 'clamp(8px, 1.5vw, 10px)',
                              fontWeight: '600',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 'clamp(5px, 1.5vw, 10px)'
                            }}>
                              <span>🎭</span> Metaphor/Analogy
                              <span style={{ marginLeft: 'auto' }}>
                                {expandedDetails[`${idx}-metaphor`] ? '▼' : '▶'}
                              </span>
                            </h6>
                            {expandedDetails[`${idx}-metaphor`] && (
                              <p style={{ 
                                color: '#2c3e50',
                                lineHeight: '1.6',
                                margin: '0',
                                fontSize: 'clamp(0.85rem, 1.8vw, 1rem)'
                              }}>
                                {q.metaphor}
                              </p>
                            )}
                          </div>
                        </div>

                        <div style={{ 
                          marginTop: 'clamp(15px, 3vw, 20px)',
                          padding: 'clamp(15px, 3vw, 20px)',
                          backgroundColor: '#f8f9fa',
                          borderRadius: '15px',
                          borderLeft: '4px solid #27ae60'
                        }}>
                          <h6 style={{ 
                            color: '#2c3e50',
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                            marginBottom: 'clamp(10px, 2vw, 15px)',
                            fontWeight: '700',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'clamp(5px, 1.5vw, 10px)'
                          }}>
                            <span>🛡️</span> Counter Strategy: {q.counterStrategy.name}
                          </h6>

                          <div style={{ 
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: 'clamp(15px, 3vw, 20px)'
                          }}>
                            <div>
                              <p style={{ 
                                color: '#444',
                                lineHeight: '1.6',
                                margin: '0 0 clamp(8px, 1.5vw, 10px) 0',
                                fontSize: 'clamp(0.85rem, 1.8vw, 1rem)'
                              }}>
                                <strong style={{ color: '#2c3e50' }}>Action:</strong> {q.counterStrategy.action}
                              </p>
                              
                              <div style={{ margin: 'clamp(8px, 1.5vw, 10px) 0' }}>
                                <strong style={{ color: '#2c3e50' }}>Examples:</strong>
                                <ul style={{ 
                                  margin: 'clamp(5px, 1.5vw, 8px) 0 0 0',
                                  paddingLeft: 'clamp(15px, 3vw, 20px)',
                                  color: '#444',
                                  lineHeight: '1.6',
                                  fontSize: 'clamp(0.85rem, 1.8vw, 1rem)'
                                }}>
                                  {q.counterStrategy.examples.map((example, i) => (
                                    <li key={i} style={{ 
                                      marginBottom: 'clamp(5px, 1.5vw, 8px)',
                                      position: 'relative',
                                      paddingLeft: 'clamp(20px, 4vw, 25px)'
                                    }}>
                                      <span style={{
                                        position: 'absolute',
                                        left: '0',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: '#27ae60'
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
                                margin: '0 0 clamp(8px, 1.5vw, 10px) 0',
                                fontSize: 'clamp(0.85rem, 1.8vw, 1rem)'
                              }}>
                                <strong style={{ color: '#2c3e50' }}>Psychology:</strong> {q.counterStrategy.psychology}
                              </p>
                              
                              <p style={{ 
                                marginTop: 'clamp(8px, 1.5vw, 10px)',
                                fontStyle: 'italic',
                                color: '#2c3e50',
                                lineHeight: '1.6',
                                padding: 'clamp(8px, 1.5vw, 10px)',
                                backgroundColor: 'rgba(255,255,255,0.5)',
                                borderRadius: '8px',
                                fontSize: 'clamp(0.85rem, 1.8vw, 1rem)'
                              }}>
                                <strong>Power Move:</strong> {q.counterStrategy.powerMove}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            <div style={{ 
              marginTop: 'clamp(15px, 3vw, 20px)',
              textAlign: 'center'
            }}>
              <Link to="/">
                <button style={{ 
                  padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 25px)',
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
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
            50% { transform: scale(1.05); }
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

          @media (max-width: 768px) {
            .question-card {
              padding: 15px !important;
            }
            
            .result-card {
              padding: 15px !important;
            }
            
            .counter-strategy {
              padding: 15px !important;
            }
          }

          @media (max-width: 480px) {
            .question-card {
              padding: 12px !important;
            }
            
            .result-card {
              padding: 12px !important;
            }
            
            .counter-strategy {
              padding: 12px !important;
            }
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

