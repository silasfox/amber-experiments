define([
    './deploy',
    './lambda',
    'amber/core/SUnit',
    // --- packages used only during automated testing begin here ---
    'amber-experiments/Experiments-Tests'
    // --- packages used only during automated testing end here ---
], function (amber) {
    return amber;
});
