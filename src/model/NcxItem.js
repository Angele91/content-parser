import Item from './Item';
import mergeObjects from '../util/mergeObjects';
import NavPoint from './NavPoint';

class NcxItem extends Item {
  constructor(rawObj = {}, freeze = true) {
    super(rawObj, freeze);
    this.navPoints = (rawObj.navPoints || []).map((navPoint) => { // eslint-disable-line arrow-body-style
      return new NavPoint(navPoint, freeze);
    });
    /* istanbul ignore else: untestable */
    if (freeze) {
      Object.freeze(this);
    }
  }

  toRaw() {
    return mergeObjects(super.toRaw(), {
      navPoints: this.navPoints.map(navPoint => navPoint.toRaw()),
      itemType: NcxItem.name,
    });
  }
}

export default NcxItem;
