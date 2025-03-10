import { useState, useEffect } from "react";
import styles from "./progress-bar.module.css"

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = Date.now();
    let duration = 3000; 

    function update() {
      let progressValue = ((Date.now() - start) / duration) * 100;
      if (progressValue > 100) progressValue = 100;

      setProgress(Math.round(progressValue));

      if (progressValue < 100) {
        requestAnimationFrame(update);
      }
    }

    update();
  }, []);

  return (
   
      <div>
      <p className={styles.progress_text}>{progress}%</p>
    </div>
  );
}
