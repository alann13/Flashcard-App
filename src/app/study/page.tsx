'use client';

import { useState } from 'react';
import { Logo } from '@/components/flashcard/logo';
import { TabButton, TabGroup } from '@/components/flashcard/tab-button';
import { StatisticCard } from '@/components/flashcard/statistic-card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Layers, Brain, BookOpen, Box, ChevronDown, Shuffle } from 'lucide-react';

export default function StudyPage() {
  const [activeTab, setActiveTab] = useState<'study' | 'all'>('study');
  const [hideMastered, setHideMastered] = useState(true);

  return (
    <div className="min-h-screen bg-neutral-100 px-[100px] py-6">
      {/* Header */}
      <header className="mb-8 flex w-full items-center justify-between">
        <Logo />
        <TabGroup>
          <TabButton active={activeTab === 'study'} onClick={() => setActiveTab('study')}>
            Study Mode
          </TabButton>
          <TabButton active={activeTab === 'all'} onClick={() => setActiveTab('all')}>
            All Cards
          </TabButton>
        </TabGroup>
      </header>

      {/* Main Content */}
      <div className="flex gap-8">
        {/* Flashcard Section */}
        <div className="w-[816px] overflow-hidden rounded-2xl border-[1px_3px_3px_1px] border-neutral-900 bg-neutral-0">
          {/* Flashcard Header */}
          <div className="flex flex-col gap-0 p-5">
            <div className="flex items-center justify-between">
              {/* Category Filter */}
              <div className="flex items-center gap-4">
                <Button variant="neo" className="gap-2">
                  All Categories
                  <ChevronDown className="h-4 w-4" />
                </Button>

                {/* Hide Mastered Filter */}
                <div className="flex items-center gap-2 px-0 py-0">
                  <Checkbox
                    id="hide-mastered"
                    checked={hideMastered}
                    onCheckedChange={(checked) => setHideMastered(checked as boolean)}
                  />
                  <label
                    htmlFor="hide-mastered"
                    className="cursor-pointer text-base font-medium leading-[1.2] text-neutral-900"
                  >
                    Hide Mastered
                  </label>
                </div>
              </div>

              {/* Shuffle Button */}
              <Button variant="neo" className="gap-2">
                <Shuffle className="h-4 w-4" />
                Shuffle
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-neutral-900" />

          {/* Flashcard Container */}
          <div className="flex h-[550px] flex-col items-center justify-center gap-0 p-5">
            <div className="flex w-[440px] flex-col items-start gap-3 text-center">
              <p className="w-full text-2xl font-semibold leading-[1.2] text-neutral-900">
                You're all caught up!
              </p>
              <p className="w-full text-base font-normal leading-[1.4] text-neutral-600">
                All your cards are mastered. Turn off "Hide mastered" to see them again.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex h-[634px] w-[392px] flex-col gap-4 rounded-2xl border-[1px_3px_3px_1px] border-neutral-900 bg-neutral-0 p-6">
          <h2 className="text-2xl font-semibold leading-[1.2] text-neutral-900">
            Study Statistics
          </h2>

          <div className="flex flex-1 flex-col gap-5">
            <StatisticCard
              title="Total Cards"
              value={40}
              icon={Layers}
              iconBgColor="bg-blue-400"
            />
            <StatisticCard
              title="Mastered"
              value={40}
              icon={Brain}
              iconBgColor="bg-teal-400"
            />
            <StatisticCard
              title="In Progress"
              value={0}
              icon={BookOpen}
              iconBgColor="bg-pink-500"
            />
            <StatisticCard
              title="Not Started"
              value={0}
              icon={Box}
              iconBgColor="bg-pink-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
