import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, ShieldCheck, AlertTriangle, Cloud, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const ConcentricLoader = () => {
  return (
    <div className="concentric-loader-container">
      <svg width="180" height="180" viewBox="0 0 180 180" style={{ transform: 'rotate(-90deg)' }}>
        <defs>
          <linearGradient id="violetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
        </defs>
        
        {/* Outer Track */}
        <circle cx="90" cy="90" r="75" fill="none" stroke="rgba(109, 40, 217, 0.2)" strokeWidth="14" />
        {/* Outer Filling Ring */}
        <motion.circle 
          cx="90" cy="90" r="75" 
          fill="none" 
          stroke="url(#violetGradient)" 
          strokeWidth="14" 
          strokeLinecap="round"
          strokeDasharray="471"
          animate={{ strokeDashoffset: [471, 0, 471] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Inner Track */}
        <circle cx="90" cy="90" r="50" fill="none" stroke="rgba(109, 40, 217, 0.15)" strokeWidth="10" />
        {/* Inner Filling Ring */}
        <motion.circle 
          cx="90" cy="90" r="50" 
          fill="none" 
          stroke="#d8b4fe" 
          strokeWidth="10" 
          strokeLinecap="round"
          strokeDasharray="314"
          animate={{ strokeDashoffset: [314, 0, 314] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    </div>
  );
};

const CircularProgressRing = ({ percentage, color }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-ring-container">
      <svg className="progress-ring" width="120" height="120">
        <defs>
          <filter id={`glow-${color.replace('#', '')}`}>
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          className="progress-ring-circle-bg"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="8"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        <motion.circle
          className="progress-ring-circle"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ strokeDasharray: circumference }}
          filter={`url(#glow-${color.replace('#', '')})`}
        />
      </svg>
      <div className="progress-ring-text" style={{ color: color }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {percentage}%
        </motion.span>
      </div>
    </div>
  );
};

const AIPredictions = () => {
  const [payload, setPayload] = useState(7500);
  const [successRate, setSuccessRate] = useState(92);
  const [siteRisk, setSiteRisk] = useState(60);
  const [weather, setWeather] = useState("Clear Skies");
  const [year, setYear] = useState(2030);

  const [loading, setLoading] = useState(false);
  const [loadingTextIdx, setLoadingTextIdx] = useState(0);
  const [result, setResult] = useState(null);

  const loadingTexts = [
    "Running simulations...",
    "Analyzing mission parameters...",
    "Predicting success probability..."
  ];

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setLoadingTextIdx(prev => (prev + 1) % loadingTexts.length);
      }, 1500);
    } else {
      setLoadingTextIdx(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const getRiskLabel = (val) => {
    if (val < 33) return "Low";
    if (val < 66) return "Medium";
    return "High";
  };

  const getInsights = (probability) => {
    const insights = [];
    if (payload > 15000) insights.push("High payload slightly reduces success probability");
    if (weather === "Clear Skies") insights.push("Weather conditions are optimal");
    if (weather === "Stormy") insights.push("Severe weather conditions significantly increase risk");
    if (successRate > 95) insights.push("Exceptional rocket reliability boosts confidence");
    if (insights.length === 0) insights.push("Parameters are within nominal operational limits");
    return insights.slice(0, 2);
  };

  const handlePredict = async () => {
    setLoading(true);
    setResult(null);
    try {
      // Add cinematic delay for the loading animation
      await new Promise(r => setTimeout(r, 4500));

      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          payload_mass: payload,
          rocket_success_rate: successRate,
          launch_site_risk: siteRisk,
          weather: weather,
          launch_year: year,
        })
      });
      const data = await response.json();
      if (data.error) {
        setResult({ error: "Unable to process request. Please try again." });
      } else {
        setResult(data);
      }
    } catch (err) {
      console.error(err);
      setResult({ error: "Unable to process request. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const getResultColor = (percentage) => {
    if (percentage >= 85) return '#10b981'; // Emerald
    if (percentage >= 50) return '#f59e0b'; // Amber
    return '#ef4444'; // Rose
  };

  return (
    <section className="ai-pred-section" id="ai-predictions">
      <div className="hiw-header">
        <motion.div
          className="badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles size={14} className="mr-2" /> AI PREDICTION
        </motion.div>

        <motion.h2
          className="hiw-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Simulate Your <span className="text-gradient">Mission</span>
        </motion.h2>

        <motion.p
          className="hiw-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Input mission parameters and let our AI analyze data<br /> to predict the probability of success with precision and confidence.
        </motion.p>
      </div>

      <AnimatePresence mode="wait">
        {!loading && !result && (
          <motion.div
            key="form"
            className="simulation-card"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="sim-card-title">Mission Parameters</h3>
            {/* Payload Mass */}
            <div className="sim-row">
              <div className="sim-row-header">
                <div className="sim-label">
                  <ShoppingBag size={18} className="sim-icon" /> Payload Mass
                </div>
                <div className="sim-value">{payload.toLocaleString()} kg</div>
              </div>
              <input
                type="range"
                min="0"
                max="20000"
                value={payload}
                onChange={(e) => setPayload(Number(e.target.value))}
                className="sim-slider"
                style={{ '--val': `${(payload / 20000) * 100}%` }}
              />
            </div>

            {/* Rocket Success Rate */}
            <div className="sim-row">
              <div className="sim-row-header">
                <div className="sim-label">
                  <ShieldCheck size={18} className="sim-icon" /> Rocket Success Rate
                </div>
                <div className="sim-value">{successRate} %</div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={successRate}
                onChange={(e) => setSuccessRate(Number(e.target.value))}
                className="sim-slider"
                style={{ '--val': `${successRate}%` }}
              />
            </div>

            {/* Launch Site Risk */}
            <div className="sim-row">
              <div className="sim-row-header">
                <div className="sim-label">
                  <AlertTriangle size={18} className="sim-icon" /> Launch Site Risk
                </div>
                <div className="sim-value">{getRiskLabel(siteRisk)}</div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={siteRisk}
                onChange={(e) => setSiteRisk(Number(e.target.value))}
                className="sim-slider"
                style={{ '--val': `${siteRisk}%` }}
              />
            </div>

            {/* Weather Conditions */}
            <div className="sim-row">
              <div className="sim-row-header">
                <div className="sim-label">
                  <Cloud size={18} className="sim-icon" /> Weather Conditions
                </div>
              </div>
              <div className="sim-select-container">
                <select
                  value={weather}
                  onChange={(e) => setWeather(e.target.value)}
                  className="sim-select"
                >
                  <option value="Clear Skies">Clear Skies</option>
                  <option value="Cloudy">Cloudy</option>
                  <option value="Stormy">Stormy</option>
                </select>
                <ChevronDown size={16} className="select-arrow" />
              </div>
            </div>

            {/* Launch Year */}
            <div className="sim-row">
              <div className="sim-row-header">
                <div className="sim-label">
                  <Calendar size={18} className="sim-icon" /> Launch Year
                </div>
              </div>
              <div className="sim-number-container">
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="sim-number-input"
                />
                <div className="number-arrows">
                  <ChevronUp size={14} className="num-arrow" onClick={() => setYear(y => y + 1)} />
                  <ChevronDown size={14} className="num-arrow" onClick={() => setYear(y => y - 1)} />
                </div>
              </div>
            </div>

            <motion.button
              className="sim-btn"
              onClick={handlePredict}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles size={18} /> Run AI Simulation
            </motion.button>
          </motion.div>
        )}

        {loading && (
          <motion.div
            key="loading"
            className="sim-loading-full-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              key={loadingTextIdx}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="sim-loading-text-large"
              style={{ marginBottom: '1.5rem' }}
            >
              {loadingTexts[loadingTextIdx]}
            </motion.div>
            <ConcentricLoader />
          </motion.div>
        )}

        {result && !loading && (
          <motion.div
            key="result"
            className="simulation-card metallic-glass sim-result-full-container"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {result.error ? (
              <>
                <div className="sim-error-large">{result.error}</div>
                <button className="sim-btn sim-btn-secondary" onClick={() => setResult(null)}>
                  Try Again
                </button>
              </>
            ) : (
              <>
                <div className="sim-result-header">Mission Success Probability</div>
                <div className="sim-result-main">
                  <CircularProgressRing
                    percentage={result.success_probability}
                    color={getResultColor(result.success_probability)}
                  />
                  <div className="sim-result-details">
                    <div className="sim-confidence">
                      Confidence: <span style={{ color: getResultColor(result.success_probability) }}>{result.confidence}</span>
                    </div>
                    <div className="sim-insights">
                      {getInsights(result.success_probability).map((insight, idx) => (
                        <div key={idx} className="sim-insight-pill">
                          <Sparkles size={12} className="mr-2" style={{ color: getResultColor(result.success_probability), flexShrink: 0 }} />
                          <span>{insight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="sim-btn sim-btn-secondary" onClick={() => setResult(null)}>
                  Run Another Simulation
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AIPredictions;
