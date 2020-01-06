import Start from './actions/start'
import SayGoodbye from './actions/say-goodbye'
import NotFound from './actions/not-found'

export const routes = [
  { input: i => i.confidence < 0.8, action: NotFound },
  { intent: 'Greetings', action: Start },
  { intent: 'Gratitude', action: SayGoodbye }
]
