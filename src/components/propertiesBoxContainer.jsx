import { useState } from 'react'
import { BoxContainer } from './boxContainer'
import { PropertyContainer } from './propertyContainer'
import { PropertyItem } from './propertyItem'

export function PropertiesBoxContainer({ minItemsCount, maxItemsCount, initialItemsCount, onPropertyChange, onItemsCountChange }) {

    const [itemsCount, setItemsCount] = useState(initialItemsCount)

    const updateItemsCount = (evt) => {
      const newItemsCount = evt.target.value

      setItemsCount(newItemsCount)
      onItemsCountChange(newItemsCount)
    }

    const propertyChangeHandler = (property) => {
        return (evt) => onPropertyChange(property, evt.target.value)
    }

    return (
        <BoxContainer title="Propriedades" className="overflow-y-auto">
          <PropertyContainer
            title="Quantidade de itens"
            description="Define a quantidade de flex items para o flex container">
              <div>
                <div className="flex space-x-2 items-end">
                  <div>
                    <div className="flex justify-between text-gray-400">
                    <span>{ minItemsCount }</span>
                    <span>{ maxItemsCount }</span>
                  </div>
                    <input type="range" 
                      min={minItemsCount}
                      max={maxItemsCount}
                      onChange={updateItemsCount}
                      value={itemsCount}
                      className="border border-stone-700 rounded-sm w-full" />
                  </div>
                  <span className="mb-1">{ itemsCount } { itemsCount == 1 ? 'item' : 'itens'}</span>
                </div>
              </div>
          </PropertyContainer>

          <PropertyContainer
            title="Flex Direction"
            description="Altera o eixo principal do flex container"
            onPropertyChange={propertyChangeHandler('flex-direction')}>
              <PropertyItem label="Row" propertyName="direction" value="row" />
              <PropertyItem label="Row Reverse" propertyName="direction" value="row-reverse" />
              <PropertyItem label="Column" propertyName="direction" value="column" />
              <PropertyItem label="Column Reverse" propertyName="direction" value="column-reverse" />
          </PropertyContainer>

          <PropertyContainer
            title="Flex Wrap"
            description="Altera a quebra de linha dos elementos do flex container"
            onPropertyChange={propertyChangeHandler('flex-wrap')}>
              <PropertyItem label="No Wrap" propertyName="wrap" value="nowrap" />
              <PropertyItem label="Wrap" propertyName="wrap" value="wrap" />
              <PropertyItem label="Wrap Reverse" propertyName="wrap" value="wrap-reverse" />
          </PropertyContainer>

          <PropertyContainer
            title="Justify Content"
            description="Altera o alinhamento e espaçamento dos itens no eixo principal do flex container"
            onPropertyChange={propertyChangeHandler('justify-content')}>
              <PropertyItem label="Flex Start" propertyName="justify-content" value="flex-start" />
              <PropertyItem label="Center" propertyName="justify-content" value="center" />
              <PropertyItem label="Flex End" propertyName="justify-content" value="flex-end" />
              <PropertyItem label="Space Between" propertyName="justify-content" value="space-between" />
              <PropertyItem label="Space Around" propertyName="justify-content" value="space-around" />
              <PropertyItem label="Space Evenly" propertyName="justify-content" value="space-evenly" />
              <PropertyItem label="Stretch" propertyName="justify-content" value="stretch" />
          </PropertyContainer>

          <PropertyContainer
            title="Align Items"
            description="Altera o alinhamento e espaçamento dos itens no eixo perpendicular (que cruza) ao eixo principal"
            onPropertyChange={propertyChangeHandler('align-items')}>
              <PropertyItem label="Flex Start" propertyName="align-items" value="flex-start" />
              <PropertyItem label="Center" propertyName="align-items" value="center" />
              <PropertyItem label="Flex End" propertyName="align-items" value="flex-end" />
              <PropertyItem label="Stretch" propertyName="align-items" value="stretch" />
              <PropertyItem label="Baseline" propertyName="align-items" value="baseline" />
          </PropertyContainer>

          <PropertyContainer
            title="Align Content"
            description="Altera o alinhamento e espaçamento das linhas do flex container"
            onPropertyChange={propertyChangeHandler('align-content')}>
              <PropertyItem label="Flex Start" propertyName="align-content" value="flex-start" />
              <PropertyItem label="Center" propertyName="align-content" value="center" />
              <PropertyItem label="Flex End" propertyName="align-content" value="flex-end" />
              <PropertyItem label="Space Between" propertyName="align-content" value="space-between" />
              <PropertyItem label="Space Around" propertyName="align-content" value="space-around" />
              <PropertyItem label="Stretch" propertyName="align-content" value="stretch" />
          </PropertyContainer>
        </BoxContainer>
    )   
}