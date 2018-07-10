import yaml from 'js-yaml';

export const Team = (name, username = null, password = null) => {
    this.name = name;
    this.username = username;
    this.password = password;
};

export const Source = (uri = null, branch = null, teams = null, target = null, insecure = null) => {
    this.uri = uri;
    this.branch = branch;

    if (teams) {
        if (!teams.every((team) => { return team instanceof Team; })) {
            throw new Error('A non team inside teams Array');
        } else {
            this.teams = teams;
        }
    }
    if (target) this.target = target;
    if (insecure) this.insecure = insecure;

};

export const Resource = (name, type, source) => {
    if (source) {
        if (!source instanceof Source) {
            throw new Error("Source not instance of a source Object");
        }
    }
    this.name = name;
    this.type = type;
    this.source = source;
};

export const SourceYamlType = new yaml.Type('!source', {
    kind: 'mapping',
    construct: (data) => {
        return new Source(data.uri, data.branch);
    },
    instanceOf: Source,
});

export const ResourceYamlType = new yaml.Type('!resource', {
    kind: 'mapping',
    construct: (data) => {
        data = data || {};
        return new Resource(data.name || null, data.type || null, data.source || null);
    },
    instanceOf: Resource
});

export const RESOURCE_SCHEMA = yaml.Schema.create([ ResourceYamlType, SourceYamlType ]);


