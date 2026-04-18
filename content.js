
function analyzeEmailText(text) {
    const suspiciousKeywords = [
"urgent","verify your account","click here","login immediately","bank account","password","confidential","limited time",
"winner","claim now","otp","reset your password","update account","account suspended","account locked","security alert",
"unusual activity","confirm identity","validate account","free gift","act now","exclusive offer","lottery","jackpot",
"congratulations","dear customer","dear user","important notice","payment failed","refund available","tax refund",
"prize","bonus","cash reward","guaranteed","risk free","no risk","limited offer","instant access","unlock now",
"restricted access","verify now","security breach","update billing","billing issue","credit card","debit card",
"cvv","pin","social security","ssn","passport copy","kyc update","kyc verification","account verification",
"suspicious login","login attempt","change password","recover account","account recovery","confirm password",
"verify email","email verification","urgent response","final notice","last warning","immediate action required",
"24 hours notice","48 hours notice","legal notice","court notice","government notice","irs notice","tax penalty",
"overdue payment","invoice attached","payment confirmation","transaction failed","transaction alert",
"wire transfer","crypto payment","bitcoin payment","gift card payment","amazon gift card","google play card",
"itunes gift card","claim reward","redeem now","claim prize","shipment delay","delivery failed","tracking number",
"confirm delivery","update address","customs fee","processing fee","membership expired","renew subscription",
"subscription expired","reactivate account","upgrade now","security upgrade","system update","malware detected",
"virus detected","device infected","spyware alert","trojan alert","download attachment","open attachment",
"view document","shared document","secure document","encrypted message","voice message","missed call alert",
"new voicemail","private message","account credited","account debited","withdrawal request","deposit alert",
"charity donation","support fund","covid relief","emergency fund","medical emergency","family emergency",
"help needed","investment opportunity","high returns","double your money","earn daily","work from home",
"easy income","quick profit","passive income","forex trading","crypto investment","binary options",
"loan approved","pre approved loan","instant loan","credit increase","credit score update","insurance claim",
"insurance refund","policy expired","policy update","beneficiary update","account statement","bank statement",
"verification code","authentication required","two factor disabled","enable 2fa","identity theft",
"fraud prevention","anti fraud","security team","technical support","customer support","help desk",
"support team","admin notice","administrator","webmaster","hosting suspended","domain expired",
"ssl expired","security certificate","account disabled","reactivate now","limited stock","flash sale",
"big discount","exclusive deal","special promotion","holiday offer","seasonal sale","black friday",
"cyber monday","new year offer","valentine offer","festival sale","mega sale","clearance sale",
"exclusive invite","vip access","private offer","secret deal","promo code","coupon code",
"apply now","register now","sign up now","join now","access now","submit details",
"provide details","update details","enter credentials","confirm details","verify information",
"identity confirmation","secure login","safe login","account confirmation","profile update",
"data validation","data update","personal information","sensitive information","confidential data",
"account freeze","account restriction","security hold","payment pending","funds on hold",
"release funds","unlock funds","claim funds","pending reward","lucky draw","selected winner",
"exclusive winner","grand prize","mega jackpot","million dollars","cash prize","transfer funds",
"secure transfer","bank transfer","international transfer","swift code","iban number",
"routing number","account number","atm card","net banking","mobile banking","e banking",
"login credentials","private key","wallet key","recovery phrase","seed phrase","crypto wallet",
"metamask update","binance alert","paypal alert","google security","microsoft alert",
"apple security","facebook alert","instagram alert","twitter alert","linkedin alert",
"whatsapp alert","telegram alert","account compromise","data breach","phishing alert",
"security warning","system alert","important update","update required","mandatory update",
"required action","action required","verify immediately","respond immediately","urgent attention",
"time sensitive","deadline today","expires today","offer expires","limited seats",
"guaranteed approval","fast approval","no verification","no credit check","instant verification",
"document required","submit document","upload id","upload passport","upload license",
"background check","compliance notice","policy violation","terms violation","copyright notice",
"dmca notice","intellectual property","violation alert","account report","account review",
"security review","compliance review","account audit","verification pending","identity pending",
"authentication failed","login failed","multiple attempts","suspicious device","new device detected",
"confirm device","device verification","geo location alert","ip change detected","browser update",
"plugin required","security plugin","install extension","install app","download now",
"free download","secure download","scan now","scan device","protect now",
"defend account","cyber attack","hacker attempt","compromised account","data leak",
"system failure","technical issue","account issue","urgent message","important message",
"bank notice","finance alert","security department","risk department","fraud department",
"compliance department","accounts department","verification department","notification center",
"payment gateway","secure portal","secure page","official notice","official message",
"government grant","stimulus payment","aid package","benefits update","welfare payment",
"pension update","retirement fund","tax benefit","rebate available","cashback offer",
"exclusive cashback","reward points","redeem points","points expired","bonus expired",
"lifetime offer","special reward","surprise gift","anniversary gift","birthday reward",
"verify subscription","unsubscribe here","cancel subscription","account closure",
"account termination","security reset","data confirmation","data verification",
"account access","restricted login","temporary suspension","account deactivation",
"emergency alert","critical alert","high priority","priority message",
"confidential notice","private notification","encrypted file","secure attachment",
"download invoice","view invoice","payment receipt","transaction receipt",
"wire confirmation","swift transfer","remittance advice","bank confirmation",
"card verification","secure payment","checkout now","pay now",
"complete purchase","order confirmation","order update","order failed",
"delivery attempt","shipment notice","courier update","tracking alert",
"address verification","delivery confirmation","account change","profile change",
"password expired","password change required","security code","one time password",
"validate now","revalidate","reconfirm","verify ownership","confirm ownership",
"secure verification","final reminder","urgent reminder","account alert",
"high risk","risk alert","critical security","fraud attempt",
"account compromised","verify transaction","confirm transaction",
"authorize payment","payment authorization","transaction verification"
];

    let score = 0;

    suspiciousKeywords.forEach(keyword => {
        if (text.toLowerCase().includes(keyword)) {
            score += 10;
        }
    });

    if (text.includes("http://") && !text.includes("https://")) {
        score += 20;
    }

    return score;
}

function createBanner(riskScore) {
    const banner = document.createElement("div");
    banner.id = "phishsence-banner";

    let riskLevel = "SAFE";
    let color = "#28a745";

    if (riskScore > 30) {
        riskLevel = "HIGH RISK - Possible Phishing!";
        color = "#dc3545";
    } else if (riskScore > 10) {
        riskLevel = "SUSPICIOUS - Be Cautious!";
        color = "#ffc107";
    }

    banner.style.backgroundColor = color;
    banner.innerHTML = `<strong>PHISHSENCE Security Scan:</strong> ${riskLevel}`;

    document.body.prepend(banner);
}

window.addEventListener("load", () => {
    const emailText = document.body.innerText;
    const riskScore = analyzeEmailText(emailText);
    createBanner(riskScore);
});
