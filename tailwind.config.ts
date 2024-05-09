type RgbaColorFunction = (opacityValue: number) => string;

function toRgba(cssVariable: string): RgbaColorFunction {
  const color = `var(${cssVariable})`;
  return (opacityValue: number): string => `rgba(${color}, ${opacityValue})`;
}

function toRgbaFunction(cssVariable: string): ({ opacityValue }: { opacityValue: number }) => string {
  const rgbaColorFunction = toRgba(cssVariable);
  return ({ opacityValue }: { opacityValue: number }): string => rgbaColorFunction(opacityValue);
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      mulish: 'Mulish, sans-serif',
    },
    fontSize: {
      xs: 'var(--font-xs)',
      sm: 'var(--font-sm)',
      md: 'var(--font-md)',
      lg: 'var(--font-lg)',
      xl: 'var(--font-xl)',
    },
    screens: {
      mobile: 'var(--screen-mobile)',
      tablet: 'var(--screen-tablet)',
      desktop: 'var(--screen-desktop)',
      tv: 'var(--screen-tv)',
    },
    spacing: {
      'none': 'var(--spacing-none) /* 0px */',
      '4xs': 'var(--spacing-4xs) /* 8px */',
      '2xs': 'var(--spacing-2xs) /* 12px */',
      'xs': 'var(--spacing-xs) /* 16px */',
      'sm': 'var(--spacing-sm) /* 20px */',
      'md': 'var(--spacing-md) /* 24px */',
      'lg': 'var(--spacing-lg) /* 32px */',
      'xl': 'var(--spacing-xl) /* 40px */',
      '2xl': 'var(--spacing-2xl) /* 48px */',
      '4xl': 'var(--spacing-4xl) /* 56px */',
      0: 'var(--spacing-none) /* 0px */',
      1: 'var(--spacing-4xs) /* 8px */',
      2: 'var(--spacing-2xs) /* 12px */',
      3: 'var(--spacing-xs) /* 16px */',
      4: 'var(--spacing-sm) /* 20px */',
      5: 'var(--spacing-md) /* 24px */',
      6: 'var(--spacing-lg) /* 32px */',
      7: 'var(--spacing-xl) /* 40px */',
      8: 'var(--spacing-2xl) /* 48px */',
      9: 'var(--spacing-4xl) /* 56px */',
    },
    extend: {
      colors: {
        primary: toRgbaFunction('--primary'),
        secondary: toRgbaFunction('--secondary'),
        tertiary: toRgbaFunction('--tertiary'),
        quaternary: toRgbaFunction('--quaternary'),
        hover: toRgbaFunction('--hover'),
        click: toRgbaFunction('--click'),
        icon: toRgbaFunction('--icon'),
        outline: toRgbaFunction('--outline'),
        divider: toRgbaFunction('--divider'),
        'bg-light': toRgbaFunction('--bg-light'),
        'bg-dark': toRgbaFunction('--bg-dark'),
        'bg-disabled': toRgbaFunction('--bg-disabled'),
        'text-primary': toRgbaFunction('--text-primary'),
        'text-secondary': toRgbaFunction('--text-secondary'),
        'text-tertiary': toRgbaFunction('--text-tertiary'),
        'text-disabled': toRgbaFunction('--text-disabled'),
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        focus: 'var(--shadow-focus)',
        outline: 'var(--shadow-outline)',
        'button-focus': 'var(--shadow-button-focus)',
      },
      blur: {
        default: 'var(--blur)',
      },
      borderRadius: {
        none: 'var(--border-radius-none)',
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
      },
    },
  },
  plugins: [],
}