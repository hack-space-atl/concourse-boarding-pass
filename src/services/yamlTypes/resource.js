import yaml from 'js-yaml';

export const Source = (uri, branch) => {
    this.uri = uri;
    this.branch = branch;
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


