import { middleware } from "@utilities/middleware";
import {
  listBeneficiaryEntities,
  createBeneficiaryEntity,
  // updateBeneficiaryEntity,
} from "@procedures/beneficiary/beneficiary.procedure.controller";

export const _procedure = {
  // createUser: middleware(_createUser),
  // verifyLogin: _verifyLogin,
  // addSubscribers: middleware(_addSubscribers),
  listBeneficiaryEntities: middleware(listBeneficiaryEntities),
  createBeneficiaryEntity: middleware(createBeneficiaryEntity),
  // updateBeneficiaryEntity: middleware(updateBeneficiaryEntity),
};
