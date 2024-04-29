const tableData = {
  columnNames: [
    {
      id: 1,
      valueEn: "NO",
      valueKr: "NO",
    },
    { id: 2, valueEn: "Existing type", valueKr: "기존유형" },
    { id: 3, valueEn: "Application type", valueKr: "신청유형" },
    { id: 4, valueEn: "Documents Required", valueKr: "제출서류" },
    { id: 5, valueEn: "Application date and time", valueKr: "신청일시" },
    { id: 6, valueEn: "Approval", valueKr: "승인여부" },
    { id: 7, valueEn: "Reason for rejection", valueKr: "승인거부 사유" },
    { id: 8, valueEn: "Approval date and time", valueKr: "승인일시s" },
  ],
  rowDatas: [
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "Look", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting for approval", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "Look", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approval denied", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "Look", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "Look", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting for approval", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
    },
  ],
};

const data = {
  tabs: [
    {
      en: "Basic information management",
      kr: "기본정보 관리",
      tablePresets: {
        tableTitleEn: "Application List",
        tableTitleKr: "신청 목록",
        statusEn: "(총 100명 | 승인대기 1건)",
        statusKr: "(Total 100 people | 1 case waiting for approval)",
        buttons: {
          resgistration: {
            valueEn: "Resgistration",
            valueKr: "등록",
          },
          save: {
            valueEn: "Save",
            valueKr: "저장",
          },
        },
        others: {
          selected: {
            valueEn: "0 items selected",
            valueKr: "선택한 0건",
          },
        },
      },
      tableData,
      dropDowns: [
        {
          descEn: "Approval dropdown",
          descKr: "승인 드롭다운",
          items: [
            {
              en: "Full approval",
              kr: "승인여부 전체",
            },
            {
              en: "Waiting for approval",
              kr: "승인대기",
            },
            {
              en: "Approved",
              kr: "승인완료",
            },
            {
              en: "Approval denied",
              kr: "승인거부",
            },
          ],
        },
        {
          descEn: "Date and time dropdown",
          descKr: "날짜 및 시간 드롭다운",
          items: [
            {
              en: "In order of application date and time",
              kr: "신청일시순",
            },
            {
              en: "Order of approval date and time",
              kr: "승인일시순",
            },
          ],
        },
        {
          descEn: "Change approval status dropdown",
          descKr: "승인 상태 드롭다운 변경",
          items: [
            {
              en: "Change approval status",
              kr: "승인상태 변경",
            },
            {
              en: "Approval denied",
              kr: "승인거부",
            },
          ],
        },
      ],
    },
    { en: "Investment type management", kr: "투자유형 관리" },
    { en: "Check deposit/withdrawal details", kr: "입출금내역 조회" },
    { en: "Sales history inquiry", kr: "영업내역 조회" },
    { en: "Investment details inquiry", kr: "투자내역 조회" },
    { en: "View bond details", kr: "채권내역 조회" },
    { en: "SMS Management", kr: "SMS 관리" },
    { en: "Consultation history management", kr: "상담내역 관리" },
    { en: "1:1 inquiry history inquiry", kr: "1:1문의내역 조회" },
  ],
};

export default data;
