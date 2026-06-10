const users = require("../data/users");

function getUserProgress(userId) {
    return users.find(user => user.id === userId);
}

function addCompletedSkill(userId, skill) {

    const user = users.find(
        user => user.id === userId
    );

    if (!user) {
        return null;
    }

    if (!user.completedSkills.includes(skill)) {
        user.completedSkills.push(skill);
    }

    return user;
}

module.exports = {
    getUserProgress,
    addCompletedSkill
};