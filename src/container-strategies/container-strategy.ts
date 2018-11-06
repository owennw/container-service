interface IContainerStrategy {
  applies(): boolean
  start(): void
}

export { IContainerStrategy }