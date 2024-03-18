import { Pipe, PipeTransform } from '@angular/core';

/**
 * This pipe is designed to be used in a template to access a component method:
 * In a template: {{ valueA | memoizerPipe : componentMethodRef : valueB }}
 * componentMethodRef must be arrow function so that it has this reference otherwise it won't work
 */
@Pipe({
  name: 'memoizer',
  pure: true,
})
export class memoizerPipe implements PipeTransform {
  transform(templateValue: any, fnReference: Function, ...fnArguments: any[]): any {
    // Due to the way pipes receive arguments, we may have inputs on both sides of
    // the function reference. As such, let's join the two input sets.
    fnArguments.unshift(templateValue);

    // CAUTION: The function reference will NOT BE INVOKED IN THE COMPONENT CONTEXT.
    // As such, a component must bind the reference if it needs to use the "this"
    // scope within the function body.
    return fnReference.apply(null, fnArguments);
  }
}
