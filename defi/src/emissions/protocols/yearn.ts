import { manualCliff, manualLinear } from "../adapters/manual";
import { Protocol } from "../types/adapters";
import { periodToSeconds } from "../utils/time";
import { yearnContributors as contributors } from "../adapters/curve";

const yearn: Protocol = {
  community: manualLinear(
    1594969200,
    1594969200 + periodToSeconds.day * 9,
    30_000,
  ),
  contributors,
  treasury: manualCliff(1612530000, 3_881),
  sources: [
    "https://finematics.com/yearn-finance-and-yfi-explained/",
    "https://gov.yearn.finance/t/yip-57-funding-yearns-future/9319",
  ],
  token: "ethereum:0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
  protocolIds: ["113"],
};
export default yearn;
