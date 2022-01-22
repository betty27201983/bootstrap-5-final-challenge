$("#twzipcode").twzipcode({
    countySel: "", // 城市預設值, 字串一定要用繁體的 "臺", 否則抓不到資料
    districtSel: "", // 地區預設值
    zipcodeIntoDistrict: true, // 郵遞區號自動顯示在地區
    css: ["form-select city form-control", "form-select town form-control"], // 自訂 "城市"、"地區" class 名稱
    countyName: "city", // 自訂城市 select 標籤的 name 值
    districtName: "town" // 自訂地區 select 標籤的 name 值
});