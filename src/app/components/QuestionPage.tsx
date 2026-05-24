import { useState } from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';
import logoBlack from '../../imports/logo_black.png';

interface Option {
  label: string;
  value: string;
}

interface QuestionPageProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  subtitle?: string;
  options: Option[];
  multiSelect?: boolean;
  onSelect: (value: string | string[]) => void;
  onBack: () => void;
  showBack: boolean;
  conditionalCTA?: {
    text: string;
    button: string;
  };
  infoCard?: {
    title: string;
    description: string;
  };
}

export function QuestionPage({
  questionNumber,
  totalQuestions,
  question,
  subtitle,
  options,
  multiSelect = false,
  onSelect,
  onBack,
  showBack,
  conditionalCTA,
  infoCard
}: QuestionPageProps) {
  const [selected, setSelected] = useState<string | string[]>(multiSelect ? [] : '');

  const handleOptionClick = (value: string) => {
    if (multiSelect) {
      const currentSelection = selected as string[];
      if (currentSelection.includes(value)) {
        setSelected(currentSelection.filter(v => v !== value));
      } else {
        setSelected([...currentSelection, value]);
      }
    } else {
      setSelected(value);
      if (!conditionalCTA && !infoCard) {
        setTimeout(() => onSelect(value), 150);
      }
    }
  };

  const handleContinue = () => {
    onSelect(selected);
  };

  const isSelected = (value: string) => {
    if (multiSelect) {
      return (selected as string[]).includes(value);
    }
    return selected === value;
  };

  const canContinue = multiSelect
    ? (selected as string[]).length > 0
    : selected !== '';

  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <header className="sticky top-0 z-10 bg-[#0a0e27] border-b border-[#8b5cf6]/20 px-4 py-4">
        <div className="max-w-[600px] mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className={`text-white p-2 ${showBack ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <ImageWithFallback
            src={logoBlack}
            alt="Patreon"
            className="h-[40px] w-auto invert"
          />
          <span className="text-[12px] text-[#6b7280]">
            Question {questionNumber} of {totalQuestions}
          </span>
        </div>
      </header>

      <div className="px-4 py-8 md:py-12">
        <div className="max-w-[600px] mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-[24px] md:text-[28px] font-bold text-white">
              {question}
            </h2>
            {subtitle && (
              <p className="text-[14px] text-[#6b7280]">{subtitle}</p>
            )}
          </div>

          {infoCard && (
            <div className="bg-[#8b5cf6] rounded-xl p-6 space-y-2">
              <h3 className="text-[18px] font-semibold text-white">{infoCard.title}</h3>
              <p className="text-[14px] text-white/90 whitespace-pre-line">{infoCard.description}</p>
            </div>
          )}

          <div className="space-y-4">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                  isSelected(option.value)
                    ? 'border-2 border-[#8b5cf6] bg-[#8b5cf6]/15'
                    : 'border border-[#8b5cf6]/20 bg-transparent hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/8'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-white">{option.label}</span>
                  {isSelected(option.value) && (
                    <span className="text-[#8b5cf6] text-xl">✓</span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {conditionalCTA && selected && (
            <div className="bg-[#8b5cf6] rounded-xl p-6 space-y-4">
              <p className="text-[14px] text-white">{conditionalCTA.text}</p>
              <Button
                onClick={handleContinue}
                className="w-full h-[48px] bg-white hover:bg-gray-100 text-[#8b5cf6] text-[14px] font-semibold rounded-lg"
              >
                {conditionalCTA.button}
              </Button>
            </div>
          )}

          {multiSelect && canContinue && (
            <Button
              onClick={handleContinue}
              className="w-full h-[56px] md:h-[48px] bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-[16px] font-semibold rounded-xl transition-all duration-200"
            >
              Continue
            </Button>
          )}

          {(conditionalCTA || infoCard) && selected && !multiSelect && (
            <Button
              onClick={handleContinue}
              className="w-full h-[56px] md:h-[48px] bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-[16px] font-semibold rounded-xl transition-all duration-200"
            >
              Continue
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
