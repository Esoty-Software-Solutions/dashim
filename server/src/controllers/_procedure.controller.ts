import { middleware } from "@utilities/middleware";
import { _ListBeneficiaries, _CreateBeneficiaries} from "./institution.controller";

export const _procedure = {
  // createUser: middleware(_createUser),
  // verifyLogin: _verifyLogin,
  // addSubscribers: middleware(_addSubscribers),
  listBeneficiaries: middleware(_ListBeneficiaries),
  CreateBeneficiaries: middleware(_CreateBeneficiaries),
};
