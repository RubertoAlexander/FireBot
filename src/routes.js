import Start from './actions/start'
import ExplainJob from './actions/explain-job'
import GetLocation from './actions/get-location'
import FiresNear from './actions/show-fires-near'
import SayThanks from './actions/say-thanks'
import NotFound from './actions/not-found'
import SafetyAdvice from './actions/link-safety'
import ShowFires from './actions/show-fire-map'
import Goodbye from './actions/say-goodbye'

export const routes = [
  {input: i => i.confidence < 0.7, action: NotFound},
  {path: 'start', intent: 'Greetings', action: Start},
  {path: 'explainJob', intent: 'Job', action: ExplainJob},
  {path: "safetyAdvice", intent: "BeSafe", action: SafetyAdvice},
  {path: "showFires", intent: "WhereFires", action: ShowFires},
  {path: 'firesNear', intent: 'FiresNear', action: GetLocation,
    childRoutes: [
      {path: "get-location", payload: "Melbourne", action: FiresNear},
      {path: "get-location", payload: "Sydney", action: FiresNear},
    ]
  },
  { path: 'Thanks', intent: 'Gratitude', action: SayThanks},
  {path: 'Bye', intent: 'Bye', action: Goodbye}
]