import yaml from 'js-yaml';

export const Step = (type, passed) => {

};

export const Plan = (steps) => {
    if (steps) {
        if (!steps.every((step) => { return step instanceof Step; })) {
            throw new Error('A non team inside teams Array');
        } else {
            this.steps = steps;
        }
    }
};

export const Jobs = (name, plan) => {
    this.name = name;
    if (!plan instanceof Plan) {
        throw new Error("A non plan inside of job")
    }
    this.plan = plan;
};


export const StepYamlType = new yaml.Type('!step', {
    kind: 'mapping',
    construct: (data) => {
        return new Step(data, data.passed)
    },
    instanceOf: Step
});

export const PlanYamlType = new yaml.Type('!plan', {
    kind: 'sequence',
    resolve: function (data) {
        return data !== null && data.length === 3;
    },
});

export const JOB_SCHEMA = yaml.Schema.create([ PlanYamlType, StepYamlType]);