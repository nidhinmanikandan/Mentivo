const careers = require("../data/careers");

function analyzeSkills(currentSkills, targetRole) {

    const roadmap = careers[targetRole];

    if (!roadmap) {
        return {
            error: "Career not found"
        };
    }

    const missingSkills = roadmap.filter(
        item => !currentSkills.includes(item.skill)
    );

    const totalSkills = roadmap.length;

    const completedSkills =
        totalSkills - missingSkills.length;

    const completion = Math.round(
        (completedSkills / totalSkills) * 100
    );

    return {
        targetRole,

        completion,

        completedSkills,

        remainingSkills: missingSkills.length,

        nextSkill:
            missingSkills.length > 0
                ? missingSkills.sort(
                    (a, b) => a.priority - b.priority
                  )[0]
                : null,

        missingSkills,

        roadmap
    };
}

module.exports = analyzeSkills;