export class ClassNameRegex {
    private CLASSNAME_REGEX: RegExp = /^[CAP]\d{4}[GHIKLM]$/
    validate(regex: string): boolean {
        return  this.CLASSNAME_REGEX.test(regex);
    }
}