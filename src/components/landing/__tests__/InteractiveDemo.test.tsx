import { render, screen, fireEvent } from '@testing-library/react';
import { InteractiveDemo } from '../InteractiveStoryDemo';

describe('InteractiveDemo Component', () => {
  beforeEach(() => {
    render(<InteractiveDemo />);
  });

  test('renders main heading', () => {
    expect(screen.getByText('Adventure Games')).toBeInTheDocument();
  });

  test('renders theme selection section', () => {
    expect(screen.getByText('THEME')).toBeInTheDocument();
  });

  test('renders game type section', () => {
    expect(screen.getByText('GAME TYPE')).toBeInTheDocument();
  });

  test('renders difficulty section', () => {
    expect(screen.getByText('DIFFICULTY')).toBeInTheDocument();
  });

  test('theme selection updates preview', () => {
    const cyberCityTheme = screen.getByText('Cyber City');
    fireEvent.click(cyberCityTheme);
    expect(screen.getByText(/Navigate through neon-lit streets/)).toBeInTheDocument();
  });

  test('game type selection works', () => {
    const gameTypeSelect = screen.getByPlaceholderText('Select game type');
    fireEvent.click(gameTypeSelect);
    const escapeRoomOption = screen.getByText('Escape Room');
    fireEvent.click(escapeRoomOption);
    expect(screen.getByText('Escape Room')).toBeInTheDocument();
  });

  test('difficulty selection works', () => {
    const difficultySelect = screen.getByPlaceholderText('Select difficulty');
    fireEvent.click(difficultySelect);
    const easyOption = screen.getByText('Easy');
    fireEvent.click(easyOption);
    expect(screen.getByText('Easy')).toBeInTheDocument();
  });

  test('minimize/maximize buttons work', () => {
    const minimizeButtons = screen.getAllByRole('button', { name: /minimize/i });
    fireEvent.click(minimizeButtons[0]);
    expect(screen.queryByPlaceholderText('Select game type')).not.toBeVisible();
  });
});