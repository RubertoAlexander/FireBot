import Start from './actions/start'
import ExplainJob from './actions/explain-job'
import FiresNear from './actions/show-fires-near'
import SayGoodbye from './actions/say-goodbye'
import NotFound from './actions/not-found'

export const routes = [
  { input: i => i.confidence < 0.7, action: NotFound },
  { intent: 'Greetings', action: Start },
  { intent: 'Job', action: ExplainJob},
  { intent: 'FiresNear', action: FiresNear},
  { intent: 'Gratitude', action: SayGoodbye }
]
