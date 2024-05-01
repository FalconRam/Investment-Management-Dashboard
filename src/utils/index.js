import { statusDesc } from "../localization";

const tagStatus = (valueEn) => {
  switch (valueEn) {
    case statusDesc.approved:
      return "approvalStatus-tag tag-success";
    case statusDesc.waiting:
      return "approvalStatus-tag tag-waiting";
    case statusDesc.rejected:
      return "approvalStatus-tag tag-rejected";
    default:
      return "no-btn";
  }
};

export { tagStatus };
