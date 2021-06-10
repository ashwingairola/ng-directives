import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[appUnless]'
})
export class UnlessDirective {
	@Input('appUnless') set unless(condition: boolean) {
		if (!condition) {
			this.viewContainerRef.createEmbeddedView(this.templateRef);
		} else {
			this.viewContainerRef.clear();
		}
	}

	constructor(
		private viewContainerRef: ViewContainerRef,
		private templateRef: TemplateRef<any>
	) {}

	// ALTERNATIVE APPROACH WITH ngOnChanges.
	// @Input('appUnless') condition!: boolean;

	// ngOnChanges(changes: SimpleChanges) {
	// 	if (changes.condition?.currentValue !== changes.condition?.previousValue) {
	// 		const currentCondition = changes.condition?.currentValue;

	// 		if (!currentCondition) {
	// 			this.viewContainerRef.createEmbeddedView(this.templateRef);
	// 		} else {
	// 			this.viewContainerRef.clear();
	// 		}
	// 	}
	// }
}
