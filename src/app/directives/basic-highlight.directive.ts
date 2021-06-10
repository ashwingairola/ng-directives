import {
	Directive,
	ElementRef,
	HostListener,
	OnInit,
	Renderer2
} from '@angular/core';

@Directive({
	selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
	constructor(
		private elementRef: ElementRef<HTMLElement>,
		private renderer: Renderer2
	) {}

	ngOnInit() {
		this.setDefaultStyles();
	}

	@HostListener('mouseenter') onMouseOver(_event: Event) {
		this.renderer.setStyle(
			this.elementRef.nativeElement,
			'backgroundColor',
			'limegreen'
		);
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.setDefaultStyles();
	}

	private setDefaultStyles() {
		this.renderer.setStyle(
			this.elementRef.nativeElement,
			'backgroundColor',
			'transparent'
		);
	}
}
