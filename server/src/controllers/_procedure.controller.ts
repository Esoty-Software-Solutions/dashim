import { middleware } from "@utilities/middleware";
import { _createUser, _verifyLogin } from "@controllers/accounts.controller";
import { _addSubscribers } from "@controllers/institution.controller";
import { _getSubscribers } from "@controllers/tableView.controller";

export const _procedure = {
  // createUser: middleware(_createUser),
  // verifyLogin: _verifyLogin,
  // addSubscribers: middleware(_addSubscribers),
};

export const _viewTable = {
  _getSubscribers: middleware(_getSubscribers),
};
