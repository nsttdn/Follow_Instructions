import { useState, useEffect } from 'react';
import { LogoSplash } from './components/LogoSplash';
import { HeroPage } from './components/HeroPage';
import { QuestionPage } from './components/QuestionPage';
import { InfoPage } from './components/InfoPage';
import { EmailCapture } from './components/EmailCapture';
import { CreatorStepsPage } from './components/CreatorStepsPage';
import { CreatorEmailPage } from './components/CreatorEmailPage';
import { PatronThankYou } from './components/PatronThankYou';
import { BenefitsCard } from './components/BenefitsCard';

export type Screen =
  | 'logo-splash'
  | 'hero'
  | 'q0'
  | 'info-page'
  | 'email-screen'
  | 'q1'
  | 'q2-creator'
  | 'q4a'
  | 'q4b'
  | 'q4c'
  | 'q2-patron'
  | 'q3-patron'
  | 'q4a-merch'
  | 'q4b-incentives'
  | 'q4c-why'
  | 'q4d-discover'
  | 'creator-steps'
  | 'creator-email'
  | 'patron-thank-you';

export type Answers = {
  q0?: string;
  q1?: string;
  q2Creator?: string;
  q4a?: string[];
  q4b?: string[];
  q4c?: string[];
  q2Patron?: string[];
  q3Patron?: string;
  q4aMerch?: string[];
  q4bIncentives?: string[];
  q4cWhy?: string[];
  q4dDiscover?: string;
  email?: string;
  notifications?: boolean;
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('logo-splash');
  const [answers, setAnswers] = useState<Answers>({});
  const [history, setHistory] = useState<Screen[]>([]);

  useEffect(() => {
    if (currentScreen === 'logo-splash') {
      const timer = setTimeout(() => {
        navigateTo('hero');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const navigateTo = (screen: Screen) => {
    setHistory([...history, currentScreen]);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (history.length > 0) {
      const previousScreen = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setCurrentScreen(previousScreen);
    }
  };

  const updateAnswer = (key: keyof Answers, value: any) => {
    setAnswers({ ...answers, [key]: value });
  };

  const handleAnswer = (key: keyof Answers, value: any, nextScreen: Screen) => {
    updateAnswer(key, value);
    navigateTo(nextScreen);
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white overflow-auto">
      {currentScreen === 'logo-splash' && <LogoSplash />}

      {currentScreen === 'hero' && (
        <HeroPage onStart={() => navigateTo('q0')} />
      )}

      {currentScreen === 'q0' && (
        <QuestionPage
          questionNumber={1}
          totalQuestions={5}
          question="Are you familiar with Patreon?"
          options={[
            { label: '✅ Yes, I know Patreon', value: 'yes' },
            { label: '❌ No, tell me more', value: 'no' }
          ]}
          onSelect={(value) => {
            if (value === 'yes') {
              handleAnswer('q0', value, 'q1');
            } else {
              handleAnswer('q0', value, 'info-page');
            }
          }}
          onBack={goBack}
          showBack={history.length > 0}
        />
      )}

      {currentScreen === 'info-page' && (
        <InfoPage
          onContinue={() => navigateTo('email-screen')}
          onBack={goBack}
        />
      )}

      {currentScreen === 'email-screen' && (
        <EmailCapture
          title="Stay updated"
          subtitle="Learn more about Patreon and creator opportunities"
          onContinue={(email, notifications) => {
            updateAnswer('email', email);
            updateAnswer('notifications', notifications);
            navigateTo('q1');
          }}
          onBack={goBack}
        />
      )}

      {currentScreen === 'q1' && (
        <QuestionPage
          questionNumber={2}
          totalQuestions={5}
          question="Are you a Creator or Patron?"
          options={[
            { label: '🎬 Creator', value: 'creator' },
            { label: '🛍️ Patron', value: 'patron' }
          ]}
          onSelect={(value) => {
            if (value === 'creator') {
              handleAnswer('q1', value, 'q2-creator');
            } else {
              handleAnswer('q1', value, 'q2-patron');
            }
          }}
          onBack={goBack}
          showBack={true}
        />
      )}

      {currentScreen === 'q2-creator' && (
        <QuestionPage
          questionNumber={3}
          totalQuestions={5}
          question="Do you sell merchandise to your audience?"
          options={[
            { label: '✅ Yes, I already sell merch', value: 'yes' },
            { label: '🤔 Thinking about it', value: 'thinking' },
            { label: '➕ No, but interested', value: 'interested' },
            { label: '❌ Not interested', value: 'not-interested' }
          ]}
          onSelect={(value) => {
            if (value === 'yes') {
              handleAnswer('q2Creator', value, 'q4a');
            } else if (value === 'thinking') {
              handleAnswer('q2Creator', value, 'q4b');
            } else if (value === 'interested') {
              handleAnswer('q2Creator', value, 'q4c');
            } else {
              handleAnswer('q2Creator', value, 'creator-steps');
            }
          }}
          onBack={goBack}
          showBack={true}
        />
      )}


      {currentScreen === 'q4a' && (
        <QuestionPage
          questionNumber={5}
          totalQuestions={5}
          question="Which platforms do you currently use to sell merch?"
          multiSelect={true}
          options={[
            { label: 'Shopify', value: 'shopify' },
            { label: 'Fourthwall', value: 'fourthwall' },
            { label: 'Spring / Printful', value: 'spring' },
            { label: 'Own website', value: 'own' },
            { label: 'Social commerce (TikTok, Instagram)', value: 'social' },
            { label: 'Other', value: 'other' }
          ]}
          onSelect={(value) => {
            handleAnswer('q4a', value, 'creator-steps');
          }}
          onBack={goBack}
          showBack={true}
        />
      )}

      {currentScreen === 'q4b' && (
        <QuestionPage
          questionNumber={4}
          totalQuestions={5}
          question="What concerns do you have about selling merch?"
          multiSelect={true}
          options={[
            { label: '🚚 Production & fulfillment logistics', value: 'logistics' },
            { label: '💰 Upfront inventory costs', value: 'costs' },
            { label: '🧠 Too complicated to manage', value: 'complicated' },
            { label: '📢 Don\'t know how to market it', value: 'marketing' },
            { label: '⚠️ Quality concerns', value: 'quality' }
          ]}
          onSelect={(value) => {
            handleAnswer('q4b', value, 'q4c');
          }}
          onBack={goBack}
          showBack={true}
          infoCard={{
            title: '✨ Patreon Merch Hub solves this:',
            description: '✓ Zero inventory (Print-on-Demand)\n✓ No upfront costs\n✓ All in one dashboard\n✓ Higher margins (7.5% vs 25%)'
          }}
        />
      )}

      {currentScreen === 'q4c' && (
        <QuestionPage
          questionNumber={5}
          totalQuestions={5}
          question="What scares you most about selling merch?"
          multiSelect={true}
          options={[
            { label: '🆘 Don\'t know where to start', value: 'start' },
            { label: '🚚 Logistics & shipping', value: 'logistics' },
            { label: '📦 Managing inventory', value: 'inventory' },
            { label: '💸 Pricing & competition', value: 'pricing' },
            { label: '🤝 Customer support', value: 'support' }
          ]}
          onSelect={(value) => {
            handleAnswer('q4c', value, 'creator-steps');
          }}
          onBack={goBack}
          showBack={true}
        />
      )}



      {currentScreen === 'q2-patron' && (
        <QuestionPage
          questionNumber={3}
          totalQuestions={5}
          question="What type of creators do you follow?"
          subtitle="Choose one or browse categories"
          multiSelect={true}
          options={[
            { label: '🎮 Gaming', value: 'gaming' },
            { label: '🎨 Art', value: 'art' },
            { label: '🎙️ Podcasts', value: 'podcasts' },
            { label: '✍️ Writing', value: 'writing' },
            { label: '🎵 Music', value: 'music' },
            { label: '📚 Education', value: 'education' }
          ]}
          onSelect={(value) => {
            handleAnswer('q2Patron', value, 'q3-patron');
          }}
          onBack={goBack}
          showBack={true}
        />
      )}

      {currentScreen === 'q3-patron' && (
        <QuestionPage
          questionNumber={4}
          totalQuestions={5}
          question="Do you buy merchandise from creators?"
          options={[
            { label: '✅ Yes, regularly', value: 'yes' },
            { label: '🤔 Sometimes', value: 'sometimes' },
            { label: '❌ Never', value: 'never' },
            { label: '😮 Didn\'t know they sold merch', value: 'didnt-know' }
          ]}
          onSelect={(value) => {
            if (value === 'yes') {
              handleAnswer('q3Patron', value, 'q4a-merch');
            } else if (value === 'sometimes') {
              handleAnswer('q3Patron', value, 'q4b-incentives');
            } else if (value === 'never') {
              handleAnswer('q3Patron', value, 'q4c-why');
            } else {
              handleAnswer('q3Patron', value, 'q4d-discover');
            }
          }}
          onBack={goBack}
          showBack={true}
        />
      )}

      {currentScreen === 'q4a-merch' && (
        <QuestionPage
          questionNumber={5}
          totalQuestions={5}
          question="What type of merch appeals to you?"
          multiSelect={true}
          options={[
            { label: '👕 Apparel (shirts, hoodies)', value: 'apparel' },
            { label: '🎯 Collectibles & figurines', value: 'collectibles' },
            { label: '💾 Digital products (wallpapers, sounds)', value: 'digital' },
            { label: '✍️ Signed or exclusive items', value: 'signed' },
            { label: '🎁 Bundles (merch + subscription)', value: 'bundles' }
          ]}
          onSelect={(value) => {
            handleAnswer('q4aMerch', value, 'patron-thank-you');
          }}
          onBack={goBack}
          showBack={true}
        />
      )}

      {currentScreen === 'q4b-incentives' && (
        <QuestionPage
          questionNumber={5}
          totalQuestions={5}
          question="What would make you buy more creator merch?"
          multiSelect={true}
          options={[
            { label: '⏰ Limited edition drops', value: 'limited' },
            { label: '🔐 Exclusive for members', value: 'exclusive' },
            { label: '💳 Better pricing/bundles', value: 'pricing' },
            { label: '🎨 More variety', value: 'variety' },
            { label: '⭐ Better quality', value: 'quality' }
          ]}
          onSelect={(value) => {
            handleAnswer('q4bIncentives', value, 'patron-thank-you');
          }}
          onBack={goBack}
          showBack={true}
          infoCard={{
            title: 'Hub offers:',
            description: '• Limited drops every month\n• Member-exclusive access\n• Bundle discounts (20-30% savings)'
          }}
        />
      )}

      {currentScreen === 'q4c-why' && (
        <QuestionPage
          questionNumber={5}
          totalQuestions={5}
          question="Why haven't you bought creator merch yet?"
          multiSelect={true}
          options={[
            { label: '😕 Didn\'t know they sold', value: 'didnt-know' },
            { label: '💸 Too expensive', value: 'expensive' },
            { label: '🚚 Shipping costs high', value: 'shipping' },
            { label: '⚠️ Quality concerns', value: 'quality' },
            { label: '🤷 Not sure where to find', value: 'where' }
          ]}
          onSelect={(value) => {
            handleAnswer('q4cWhy', value, 'patron-thank-you');
          }}
          onBack={goBack}
          showBack={true}
          infoCard={{
            title: 'Hub solutions:',
            description: '• Didn\'t know? → Discover all in one place\n• Too expensive? → Bundle discounts (save 20-30%)\n• Shipping high? → Free shipping on bundles\n• Quality concerns? → Verified reviews\n• Not sure where? → Everything here on Hub'
          }}
        />
      )}

      {currentScreen === 'q4d-discover' && (
        <QuestionPage
          questionNumber={5}
          totalQuestions={5}
          question="Let's find their merch! Would you like to explore?"
          options={[
            { label: '✅ Yes, show me!', value: 'yes' },
            { label: '❌ Not now', value: 'no' }
          ]}
          onSelect={(value) => {
            handleAnswer('q4dDiscover', value, 'patron-thank-you');
          }}
          onBack={goBack}
          showBack={true}
        />
      )}

      {currentScreen === 'creator-steps' && (
        <CreatorStepsPage onContinue={() => navigateTo('creator-email')} />
      )}

      {currentScreen === 'creator-email' && (
        <CreatorEmailPage
          onSubmit={(email, sendResources) => {
            updateAnswer('email', email);
            console.log('Creator email submitted:', { email, sendResources });
          }}
        />
      )}

      {currentScreen === 'patron-thank-you' && (
        <PatronThankYou
          selectedCategories={answers.q2Patron || []}
          onFinish={(email, notifications) => {
            if (email) {
              updateAnswer('email', email);
              updateAnswer('notifications', notifications);
            }
            console.log('Quiz completed!', { answers, email, notifications });
          }}
        />
      )}
    </div>
  );
}