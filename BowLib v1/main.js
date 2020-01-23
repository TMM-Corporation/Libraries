IMPORT("Bow");

/**
 * ItemID          - cbow
 * Name            - Custom Bow
 * Texture         - Cbow
 * Max Damage      - 385
 * Bullets         - 262 (arrow item)
 * Arrow skin path - entity/arrow.png
 * Arrow speed     - 2
 * Arrow Damage    - 1.5
 * Bow Frames      - 3
 * Animation time  - 5 ticks (not changable)
 */

IDRegistry.genItemID("cbow");
Item.createItem("cbow", "Custom Bow", { name: "Cbow", meta: 0 }, { stack: 1 });

Item.describeItem(ItemID.cbow, {
	toolRender: true, // Is toolRender
	maxDamage: 385, // Max bow damage 
	useAnimation: 4 // Bow animation
});

var CustomBow = new Bow();
CustomBow.set({
	id: ItemID.cbow, // Bow Item id
	texture: "Cbow", // Bow texture for animate
	bullets: [262], // Items to retrive
	skin: "entity/arrow.png", // Arrow Skin
	speed: 2, // Arrow speed
	damage: 1.5, // Arrow Damage
	variations: 3, // Arrow animation frames
})