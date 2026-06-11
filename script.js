(function () {
  const button = document.querySelector("[data-vcard]");

  if (!button) {
    return;
  }

  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Krizanovic;Nino;;;",
    "FN:Nino Krizanovic",
    "ORG:Smart Clean - Car Detailing",
    "TITLE:Professionelle Fahrzeugaufbereitung",
    "TEL;TYPE=CELL,VOICE,WHATSAPP:+4917673988614",
    "EMAIL;TYPE=INTERNET:smartclean.de@gmail.com",
    "URL:https://www.sc-detailing.de/",
    "ADR;TYPE=WORK:;;Meersburger Str. 18/2;Friedrichshafen;;88045;Deutschland",
    "X-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/smartclean_de?igsh=MXZxOXU0MmN6dXg3cw==",
    "END:VCARD"
  ].join("\r\n");

  button.addEventListener("click", function () {
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "nino-krizanovic-smart-clean.vcf";
    document.body.appendChild(link);
    link.click();
    link.remove();

    window.setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
  });
})();
