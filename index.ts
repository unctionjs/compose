import thrush from "@unction/thrush";
import reduceValues from "@unction/reducevalues";
import reverse from "@unction/reverse";

export default function compose (unctions) {
  return function composeUnctions (initial) {
    return reduceValues(thrush)(initial)(reverse(unctions));
  };
}
