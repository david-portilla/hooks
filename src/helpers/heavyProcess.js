export const heavyProcess = (iterator) => {
  for (let i = 0;i < iterator;i++) {
    console.log('working')
  }

  return `${ iterator } amoutn of iterations `
}