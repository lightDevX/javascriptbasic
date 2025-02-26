function calculateTax(income, expenses) {
    if (income <= 0) {
        return "Invalid input";
    }

    else if (expenses < 0) {
        return "Invalid input";
    }
    else if (income < expenses) {
        return "Invalid input";
    }

    else {
        const tax = (income - expenses) * 0.2;
        return tax;
    }
}



function sendNotification(email) {
    if (!email.includes("@")) {
        return "Invalid input";
    }
    const [userName, domainName] = email.split("@");
    return ` ${userName} sent you an email from ${domainName}`;
}



function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid input";
    }

    for (let char of name) {
        if (!isNaN(char)) {
            return true;
        }
    }
    return false;
}


function calculateFinalScore(obj) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return "Invalid input";
    }

    if (typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || typeof obj.schoolGrade !== 'number' || typeof obj.isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    let finalScore = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily) {
        finalScore += 20;
    }
    return finalScore >= 80;

}


function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(interviewTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        totalTime += interviewTimes[i];
    }

    const averageTime = Math.round(totalTime / interviewTimes.length);

    const candidatesCompleted = interviewTimes.length;
    const candidatesRemaining = serialNumber - 1 - candidatesCompleted;

    const waitingTime = candidatesRemaining * averageTime;

    return waitingTime;

}
