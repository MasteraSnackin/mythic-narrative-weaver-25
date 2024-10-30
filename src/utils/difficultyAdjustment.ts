interface PerformanceMetrics {
  decisionSpeed: number;  // Average time taken to make decisions (seconds)
  successRate: number;    // Success rate in challenges (0-1)
  engagementTime: number; // Time spent on current section (seconds)
}

interface DifficultySettings {
  complexity: number;     // 0-1 scale of narrative complexity
  timeLimit: number;      // Time given for decisions (seconds)
  challengeLevel: number; // 0-1 scale of challenge difficulty
}

export const calculateDifficulty = (metrics: PerformanceMetrics): DifficultySettings => {
  const { decisionSpeed, successRate, engagementTime } = metrics;
  
  // Adjust complexity based on success rate and decision speed
  const complexity = Math.min(
    0.2 + (successRate * 0.5) + (1 / decisionSpeed * 0.3),
    1
  );
  
  // Adjust time limit based on average decision speed
  const timeLimit = Math.max(
    10,
    30 - (decisionSpeed * 0.5)
  );
  
  // Adjust challenge level based on overall performance
  const challengeLevel = Math.min(
    0.2 + (successRate * 0.4) + (engagementTime * 0.001),
    1
  );
  
  return { complexity, timeLimit, challengeLevel };
};

export const getDifficultyLabel = (settings: DifficultySettings): string => {
  const averageDifficulty = (
    settings.complexity + 
    (1 - settings.timeLimit / 30) + 
    settings.challengeLevel
  ) / 3;
  
  if (averageDifficulty < 0.3) return "Beginner";
  if (averageDifficulty < 0.6) return "Intermediate";
  return "Advanced";
};