export function timeLeftBloodCastle(times) {
    const now = new Date();
  
    const time = times.find ((element) => )
    const remainingTime = time - now.getTime();
  
    const seconds = Math.floor((remainingTime / 1000) % 60);
    const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  
  
    return { days, hours, minutes, seconds };
 
  }