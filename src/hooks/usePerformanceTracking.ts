import { useState, useEffect } from "react";
import { PerformanceMetrics } from "@/utils/difficultyAdjustment";

export const usePerformanceTracking = () => {
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [decisions, setDecisions] = useState<number[]>([]);
  const [successes, setSuccesses] = useState<boolean[]>([]);
  
  const trackDecision = (timeSpent: number) => {
    setDecisions(prev => [...prev, timeSpent]);
  };
  
  const trackSuccess = (isSuccess: boolean) => {
    setSuccesses(prev => [...prev, isSuccess]);
  };
  
  const getMetrics = (): PerformanceMetrics => {
    const decisionSpeed = decisions.length > 0 
      ? decisions.reduce((a, b) => a + b, 0) / decisions.length 
      : 15;
      
    const successRate = successes.length > 0
      ? successes.filter(s => s).length / successes.length
      : 0.5;
      
    const engagementTime = (Date.now() - startTime) / 1000;
    
    return { decisionSpeed, successRate, engagementTime };
  };
  
  const resetTracking = () => {
    setStartTime(Date.now());
    setDecisions([]);
    setSuccesses([]);
  };
  
  return {
    trackDecision,
    trackSuccess,
    getMetrics,
    resetTracking
  };
};