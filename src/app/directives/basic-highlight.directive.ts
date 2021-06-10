import {
	Directive,
	ElementRef,
	HostBinding,
	HostListener,
	Input,
	OnInit
	// Renderer2
} from '@angular/core';

@Directive({
	selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
	@Input() defaultColor: string = 'transparent';
	@Input('appBasicHighlight') highlightColor: string = 'skyblue';
	@HostBinding('style.backgroundColor') backgroundColor!: string;

	constructor(
		private elementRef: ElementRef<HTMLElement> // private renderer: Renderer2
	) {}

	ngOnInit() {
		this.setDefaultStyles();
	}

	@HostListener('mouseenter') onMouseOver(_event: Event) {
		// this.renderer.setStyle(
		// 	this.elementRef.nativeElement,
		// 	'backgroundColor',
		// 	'limegreen'
		// );
		this.backgroundColor = this.highlightColor;
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.setDefaultStyles();
	}

	private setDefaultStyles() {
		// this.renderer.setStyle(
		// 	this.elementRef.nativeElement,
		// 	'backgroundColor',
		// 	'transparent'
		// );

		this.backgroundColor = this.defaultColor;
	}
}
