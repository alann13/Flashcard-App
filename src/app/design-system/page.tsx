import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-neutral-900 px-20 py-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 border-2 border-neutral-900">
              <div className="text-lg font-bold text-neutral-900">🃏</div>
            </div>
            <div className="text-xl font-bold text-white">Flashcard App</div>
          </div>
          <h1 className="font-['Manrope'] text-2xl font-bold text-white">Design System</h1>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-20 py-20">
        <Tabs defaultValue="color" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="color">Color</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="spacing">Spacing</TabsTrigger>
            <TabsTrigger value="radius">Radius</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
          </TabsList>

          {/* Colors Tab */}
          <TabsContent value="color" className="space-y-12">
            {/* Neutral Colors */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-neutral-900">Neutral</h2>
                <div className="h-px w-full bg-neutral-900 opacity-15" />
              </div>

              <div className="grid grid-cols-4 gap-8">
                {[
                  { name: 'Neutral 900', hex: '#2E1401', rgb: '46, 20, 1', hsl: '24°, 96%, 9%', color: 'bg-neutral-900' },
                  { name: 'Neutral 600', hex: '#6D5B4D', rgb: '109, 91, 77', hsl: '25°, 17%, 36%', color: 'bg-neutral-600' },
                  { name: 'Neutral 100', hex: '#F7F3F0', rgb: '247, 243, 240', hsl: '24°, 40%, 95%', color: 'bg-neutral-100' },
                  { name: 'Neutral 0', hex: '#FFFFFF', rgb: '255, 255, 255', hsl: '0, 0%, 100%', color: 'bg-neutral-0 shadow-md' },
                ].map((palette) => (
                  <div key={palette.name} className="space-y-3">
                    <div className={`h-24 w-full rounded-[10px] ${palette.color}`} />
                    <p className="text-lg font-semibold text-neutral-900">{palette.name}</p>
                    <div className="space-y-1 text-base">
                      <div className="flex gap-8">
                        <span className="w-11 text-muted-foreground">HEX</span>
                        <span className="text-neutral-900">{palette.hex}</span>
                      </div>
                      <div className="flex gap-8">
                        <span className="w-11 text-muted-foreground">RGB</span>
                        <span className="text-neutral-900">{palette.rgb}</span>
                      </div>
                      <div className="flex gap-8">
                        <span className="w-11 text-muted-foreground">HSL</span>
                        <span className="text-neutral-900">{palette.hsl}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent Colors */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-neutral-900">Accent Colors</h2>
                <div className="h-px w-full bg-neutral-900 opacity-15" />
              </div>

              <div className="grid grid-cols-4 gap-8">
                {[
                  { name: 'Yellow 500', hex: '#F8CB46', rgb: '248, 203, 70', hsl: '43°, 93%, 63%', color: 'bg-yellow-500' },
                  { name: 'Blue 400', hex: '#92ADEB', rgb: '146, 173, 235', hsl: '221°, 68%, 75%', color: 'bg-blue-400' },
                  { name: 'Blue 600', hex: '#5072C7', rgb: '80, 114, 199', hsl: '222°, 52%, 55%', color: 'bg-blue-600' },
                  { name: 'Teal 400', hex: '#47D9C9', rgb: '71, 217, 201', hsl: '173°, 66%, 57%', color: 'bg-teal-400' },
                ].map((palette) => (
                  <div key={palette.name} className="space-y-3">
                    <div className={`h-24 w-full rounded-[10px] ${palette.color}`} />
                    <p className="text-lg font-semibold text-neutral-900">{palette.name}</p>
                    <div className="space-y-1 text-base">
                      <div className="flex gap-8">
                        <span className="w-11 text-muted-foreground">HEX</span>
                        <span className="text-neutral-900">{palette.hex}</span>
                      </div>
                      <div className="flex gap-8">
                        <span className="w-11 text-muted-foreground">RGB</span>
                        <span className="text-neutral-900">{palette.rgb}</span>
                      </div>
                      <div className="flex gap-8">
                        <span className="w-11 text-muted-foreground">HSL</span>
                        <span className="text-neutral-900">{palette.hsl}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-8 mt-8">
                {[
                  { name: 'Pink 400', hex: '#FC8AE5', rgb: '252, 138, 229', hsl: '314°, 94%, 76%', color: 'bg-pink-400' },
                  { name: 'Pink 500', hex: '#F073A3', rgb: '240, 115, 163', hsl: '337°, 80%, 70%', color: 'bg-pink-500' },
                  { name: 'Pink 700', hex: '#E11966', rgb: '225, 25, 102', hsl: '336°, 79%, 49%', color: 'bg-pink-700' },
                ].map((palette) => (
                  <div key={palette.name} className="space-y-3">
                    <div className={`h-24 w-full rounded-[10px] ${palette.color}`} />
                    <p className="text-lg font-semibold text-neutral-900">{palette.name}</p>
                    <div className="space-y-1 text-base">
                      <div className="flex gap-8">
                        <span className="w-11 text-muted-foreground">HEX</span>
                        <span className="text-neutral-900">{palette.hex}</span>
                      </div>
                      <div className="flex gap-8">
                        <span className="w-11 text-muted-foreground">RGB</span>
                        <span className="text-neutral-900">{palette.rgb}</span>
                      </div>
                      <div className="flex gap-8">
                        <span className="w-11 text-muted-foreground">HSL</span>
                        <span className="text-neutral-900">{palette.hsl}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="space-y-12">
            {[
              { name: 'Text Preset 1', size: '40px', lineHeight: '120%', letterSpacing: '0px', className: 'text-[40px] leading-[1.2] font-bold' },
              { name: 'Text Preset 1 (Tablet)', size: '32px', lineHeight: '120%', letterSpacing: '0px', className: 'text-[32px] leading-[1.2] font-bold' },
              { name: 'Text Preset 1 (Mobile)', size: '24px', lineHeight: '120%', letterSpacing: '0px', className: 'text-2xl leading-[1.2] font-bold' },
              { name: 'Text Preset 2', size: '24px', lineHeight: '120%', letterSpacing: '0px', className: 'text-2xl leading-[1.2] font-semibold' },
              { name: 'Text Preset 3', size: '20px', lineHeight: '120%', letterSpacing: '0px', className: 'text-xl leading-[1.2] font-semibold' },
              { name: 'Text Preset 4 (SemiBold)', size: '16px', lineHeight: '120%', letterSpacing: '0px', className: 'text-base leading-[1.2] font-semibold' },
              { name: 'Text Preset 4 (Medium)', size: '16px', lineHeight: '120%', letterSpacing: '0px', className: 'text-base leading-[1.2] font-medium' },
              { name: 'Text Preset 4 (Regular)', size: '16px', lineHeight: '140%', letterSpacing: '0px', className: 'text-base leading-[1.4] font-normal' },
              { name: 'Text Preset 5', size: '14px', lineHeight: '140%', letterSpacing: '0px', className: 'text-sm leading-[1.4] font-medium' },
              { name: 'Text Preset 5 (Regular)', size: '14px', lineHeight: '140%', letterSpacing: '0px', className: 'text-sm leading-[1.4] font-normal' },
              { name: 'Text Preset 6', size: '12px', lineHeight: '130%', letterSpacing: '-3%', className: 'text-xs leading-[1.3] font-medium tracking-tight' },
            ].map((preset) => (
              <div key={preset.name} className="space-y-6">
                <div className="flex items-start gap-4 text-base font-medium text-neutral-900">
                  <p>{preset.name}</p>
                  <p>-</p>
                  <p className="flex-1">Poppins</p>
                </div>
                <p className={`text-neutral-900 ${preset.className}`}>
                  The quick brown fox jumps over the lazy dog.
                </p>
                <div className="flex gap-4">
                  <div className="rounded-lg border border-neutral-100 px-4 py-1 text-base">
                    <span className="text-neutral-900/70">Font Size:</span> <span>{preset.size}</span>
                  </div>
                  <div className="rounded-lg border border-neutral-100 px-4 py-1 text-base">
                    <span className="text-neutral-900/70">Line Height:</span> <span>{preset.lineHeight}</span>
                  </div>
                  <div className="rounded-lg border border-neutral-100 px-4 py-1 text-base">
                    <span className="text-neutral-900/70">Letter Spacing:</span> <span>{preset.letterSpacing}</span>
                  </div>
                </div>
                <div className="h-px w-full bg-neutral-100" />
              </div>
            ))}
          </TabsContent>

          {/* Spacing Tab */}
          <TabsContent value="spacing" className="space-y-4">
            <div className="space-y-4">
              <div className="flex gap-4 text-base font-bold text-neutral-900">
                <p className="w-[150px]">Name</p>
                <p className="w-[150px]">Pixels</p>
                <p>Spacing</p>
              </div>
              <div className="h-px w-full bg-neutral-100" />

              {[
                { name: 'spacing-0', pixels: '0', width: '0px' },
                { name: 'spacing-25', pixels: '2px', width: '2px' },
                { name: 'spacing-50', pixels: '4px', width: '4px' },
                { name: 'spacing-75', pixels: '6px', width: '6px' },
                { name: 'spacing-100', pixels: '8px', width: '8px' },
                { name: 'spacing-125', pixels: '10px', width: '10px' },
                { name: 'spacing-150', pixels: '12px', width: '12px' },
                { name: 'spacing-200', pixels: '16px', width: '16px' },
                { name: 'spacing-250', pixels: '20px', width: '20px' },
                { name: 'spacing-300', pixels: '24px', width: '24px' },
                { name: 'spacing-400', pixels: '32px', width: '32px' },
                { name: 'spacing-500', pixels: '40px', width: '40px' },
                { name: 'spacing-600', pixels: '48px', width: '48px' },
                { name: 'spacing-800', pixels: '64px', width: '64px' },
                { name: 'spacing-1000', pixels: '80px', width: '80px' },
                { name: 'spacing-1200', pixels: '96px', width: '96px' },
                { name: 'spacing-1400', pixels: '112px', width: '112px' },
                { name: 'spacing-1600', pixels: '128px', width: '128px' },
                { name: 'spacing-1800', pixels: '140px', width: '140px' },
              ].map((spacing) => (
                <div key={spacing.name}>
                  <div className="flex items-center gap-4">
                    <p className="w-[150px] text-base text-neutral-900">{spacing.name}</p>
                    <p className="w-[150px] text-base text-neutral-900">{spacing.pixels}</p>
                    <div className="h-10 bg-neutral-900" style={{ width: spacing.width }} />
                  </div>
                  <div className="mt-4 h-px w-full bg-neutral-100" />
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Radius Tab */}
          <TabsContent value="radius" className="space-y-4">
            <div className="space-y-4">
              <div className="flex gap-4 text-base font-bold text-neutral-900">
                <p className="w-[150px]">Name</p>
                <p className="w-[150px]">Pixels</p>
                <p>Example</p>
              </div>
              <div className="h-px w-full bg-neutral-100" />

              {[
                { name: 'radius-0', pixels: '0', radius: '0px' },
                { name: 'radius-4', pixels: '4px', radius: '4px' },
                { name: 'radius-6', pixels: '6px', radius: '6px' },
                { name: 'radius-8', pixels: '8px', radius: '8px' },
                { name: 'radius-10', pixels: '10px', radius: '10px' },
                { name: 'radius-12', pixels: '12px', radius: '12px' },
                { name: 'radius-16', pixels: '16px', radius: '16px' },
                { name: 'radius-20', pixels: '20px', radius: '20px' },
                { name: 'radius-24', pixels: '24px', radius: '24px' },
                { name: 'radius-full', pixels: '999px', radius: '999px' },
              ].map((r) => (
                <div key={r.name}>
                  <div className="flex items-center gap-4">
                    <p className="w-[150px] text-base text-neutral-900">{r.name}</p>
                    <p className="w-[150px] text-base text-neutral-900">{r.pixels}</p>
                    <div
                      className="h-10 w-40 border border-dashed border-neutral-900 bg-neutral-100"
                      style={{ borderTopLeftRadius: r.radius, borderBottomLeftRadius: r.radius === '999px' ? r.radius : '0' }}
                    />
                  </div>
                  <div className="mt-4 h-px w-full bg-neutral-100" />
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-12">
            {/* Buttons */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">Buttons</h2>
              <div className="flex flex-wrap gap-4">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="destructive">Destructive Button</Button>
                <Button disabled>Disabled Button</Button>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">Inputs</h2>
              <div className="max-w-md space-y-4">
                <Input placeholder="Default input" />
                <Input placeholder="Disabled input" disabled />
              </div>
            </div>

            {/* Textarea */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">Textarea</h2>
              <div className="max-w-md space-y-4">
                <Textarea placeholder="Enter your text here..." />
                <Textarea placeholder="Disabled textarea" disabled />
              </div>
            </div>

            {/* Checkbox */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">Checkbox</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms1" />
                  <label htmlFor="terms1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Accept terms and conditions
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms2" checked />
                  <label htmlFor="terms2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Checked
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms3" disabled />
                  <label htmlFor="terms3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Disabled
                  </label>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
