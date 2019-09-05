import thrush from "@unction/thrush";
import reduceValues from "@unction/reducevalues";
import reverse from "@unction/reverse";

export default function compose<A, B, C> (unctions: Array<A>) {
  return function composeUnctions (initial: B): C {
    return reduceValues(thrush)(initial)(reverse(unctions));
  };
}
