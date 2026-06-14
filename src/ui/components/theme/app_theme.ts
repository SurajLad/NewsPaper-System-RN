import { DefaultTheme, DarkTheme } from '@react-navigation/native'

export const CustomLightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1A73E8',     // Vibrant brand blue (Generate Bills button / Dashboard active tab)
    background: '#FFFFFF',  // Pure white base canvas
    card: '#F1F3F4',        // Soft gray backdrop (Quick Actions / Search bar backgrounds)
    text: '#000000',        // Deep black for main titles and large currency values
    border: '#E8EAED',      // Light separator line between recent activities
    notification: '#D93025', // Crimson red (Pending dues icon / notification badge)
    
    // Custom utility extensions based on the screenshot
    secondaryText: '#5F6368', // Muted dark gray (Subtitles like "Active Customers", date label)
    success: '#188038',       // Emerald green (Standard for "Collected This Month" variants)
    infoContainer: '#E8F0FE', // Very soft blue (Recent activity icon circle backdrop)
  },
};

export const CustomDarkTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#4285F4',     // Brightened neon blue for accessible contrast on dark backgrounds
    background: '#121212',  // Deep dark gray canvas standard
    card: '#1E1E1E',        // Slightly lighter elevated surface gray for Quick Action buttons
    text: '#FFFFFF',        // Pure white for highly legible text and headers
    border: '#2D2D2D',      // Muted dark separator line
    notification: '#E2554D', // Softened red for comfortable dark-mode viewing
    
    // Custom dark utility extensions
    secondaryText: '#9AA0A6', // High-contrast muted silver for labels
    success: '#81C995',       // Mint green variant for dark mode readability
    infoContainer: '#E8F0FE', // Deep dark blue container for activity icons
  },
};

type ExtendedColors = typeof CustomLightTheme.colors;


declare module '@react-navigation/native' {
  export function useTheme(): {
    dark: boolean;
    colors: ExtendedColors; // Overrides the built-in type with your expanded color list
  };
}