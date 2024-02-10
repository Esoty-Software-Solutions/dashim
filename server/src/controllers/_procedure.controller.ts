import { middleware } from "@utilities/middleware";
import {
  _listBeneficiaries,
  _createBeneficiaryEntity,
} from "./beneficiary.controller";

export const _procedure = {
  // createUser: middleware(_createUser),
  // verifyLogin: _verifyLogin,
  // addSubscribers: middleware(_addSubscribers),
  listBeneficiaries: middleware(_listBeneficiaries),
  createBeneficiaryEntity: middleware(_createBeneficiaryEntity),
};
