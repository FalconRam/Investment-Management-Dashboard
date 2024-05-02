const tableData = {
  columnNames: [
    {
      id: 1,
      valueEn: "NO",
      valueKr: "NO",
    },
    { id: 2, valueEn: "Existing type", valueKr: "기존유형" },
    { id: 3, valueEn: "Type", valueKr: "신청유형" },
    { id: 4, valueEn: "Docs Required", valueKr: "제출서류" },
    { id: 5, valueEn: "Application Timestamp", valueKr: "신청일시" },
    { id: 6, valueEn: "Approval", valueKr: "승인여부" },
    { id: 7, valueEn: "Rejection Reason", valueKr: "승인거부 사유" },
    { id: 8, valueEn: "Approval Timestamp", valueKr: "승인일시" },
    { id: 8, valueEn: "Manager", valueKr: "관리자" },
  ],
  pagination: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  rowDatas: [
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Income eligibility", valueKr: "소득적격" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Approved", valueKr: "승인완료" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Waiting", valueKr: "승인대기" },
      7: { valueEn: "", valueKr: "" },
      8: { valueEn: "", valueKr: "" },
      9: { valueEn: "", valueKr: "" },
    },
    {
      2: { valueEn: "Income eligibility", valueKr: "소득적격" },
      3: { valueEn: "Personal expertise", valueKr: "개인전문" },
      4: { valueEn: "View", valueKr: "보기" },
      5: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      6: { valueEn: "Rejected", valueKr: "승인거부" },
      7: {
        valueEn:
          "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago.",
        valueKr:
          "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      },
      8: { valueEn: "2023-01-10 09:00:00", valueKr: "2023-01-10 09:00:00" },
      9: { valueEn: "Manger Kim", valueKr: "김관리자" },
    },
  ],
};

const modal = {
  alert: {
    upload_size_warningAlert: {
      alertMessageEn: "Up to 100MB can be Uploaded.",
      alertMessageKr: "최대 100MB까지 등록 가능합니다.",
    },
    upload_successAlert: {
      alertMessageEn: "Saved.",
      alertMessageKr: "저장되었습니다.",
    },
    investChange_message: {
      valueEn: "Would you like to change your investment type?",
      valueKr: "투자유형을 변경하시겠습니까?",
    },
  },
  buttons: {
    ok: {
      valueEn: "Ok",
      valueKr: "확인",
    },
    save: {
      valueEn: "Save",
      valueKr: "저장",
    },
    cancel: {
      valueEn: "Cancel",
      valueKr: "취소",
    },
  },
  investment: {
    title: { titleEn: "Change investment type", titleKr: "투자유형 변경" },
    labels: [
      {
        valueEn: "Membership number",
        valueKr: "회원번호",
        labelValue: {
          valueEn: "abc111",
          valueKr: "abc111",
        },
      },
      {
        valueEn: "Member name",
        valueKr: "회원명/법인명",
        labelValue: {
          valueEn: "Kim Gil-dong",
          valueKr: "김길동",
        },
      },
      {
        valueEn: "Investment Type",
        valueKr: "예치금잔액",
        labelValue: {
          types: [
            { valueEn: "General Individual", valueKr: "일반개인" },
            { valueEn: "Personal Expertise", valueKr: "개인전문" },
            { valueEn: "Corporation", valueKr: "법인" },
            { valueEn: "P2P Onto", valueKr: "P2P온투" },
          ],
        },
      },
      {
        valueEn: "Attach documents",
        valueKr: "투자건수",
        labelValue: {
          select: {
            valueEn: "Select",
            valueKr: "선택",
          },
          selectedFiles: ["사업자등록증1.jpg", "서류1.jpg"],
        },
      },
    ],
    uploadSuggestions: [
      {
        valueEn:
          "The only file formats available are jpg, jpeg, gif, png, and pdf.",
        valueKr: "파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.",
      },
      {
        valueEn: "You can upload up to 10 items and up to 100MB.",
        valueKr: "최대 10개, 100MB까지 등록이 가능합니다.",
      },
    ],
  },
};

const data = {
  tabs: [
    {
      en: "Basic information management",
      kr: "기본정보 관리",
    },
    {
      en: "Investment type management",
      kr: "투자유형 관리",
      tablePresets: {
        tableTitleEn: "Application List",
        tableTitleKr: "신청 목록",
        statusEn: "(Total 100 people | 1 case waiting for approval)",
        statusKr: "(총 100명 | 승인대기 1건)",
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
          approvalStatusDropdown: {
            descEn: "Change approval status",
            descKr: "승인상태 변경",
            items: [
              {
                en: "Change approval status",
                kr: "승인상태 변경",
              },
              {
                en: "Rejected",
                kr: "승인거부",
              },
            ],
          },
        },
      },
      tableData,
      dropDowns: [
        {
          descEn: "Approval",
          descKr: "승인여부 전체",
          items: [
            {
              en: "Full approval",
              kr: "승인여부 전체",
            },
            {
              en: "Waiting",
              kr: "승인대기",
            },
            {
              en: "Approved",
              kr: "승인완료",
            },
            {
              en: "Rejected",
              kr: "승인거부",
            },
          ],
        },
        {
          descEn: "Date and time",
          descKr: "날짜 및 시간",
          items: [
            {
              en: "Submitted date & time",
              kr: "신청일시순",
            },
            {
              en: "Approval date & time",
              kr: "승인일시순",
            },
          ],
        },
        {
          descEn: "View 50 each",
          descKr: "50개씩 보기",
          items: [],
        },
      ],
    },
    { en: "Check deposit/withdrawal details", kr: "입출금내역 조회" },
    { en: "Sales history inquiry", kr: "영업내역 조회" },
    { en: "Investment details inquiry", kr: "투자내역 조회" },
    { en: "View bond details", kr: "채권내역 조회" },
    { en: "SMS Management", kr: "SMS 관리" },
    { en: "Consultation history management", kr: "상담내역 관리" },
    { en: "1:1 inquiry history", kr: "1:1문의내역 조회" },
  ],
  modal,
};

export default data;
